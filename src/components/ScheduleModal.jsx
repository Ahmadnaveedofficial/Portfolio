import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const TIME_SLOTS = [
  "9:00 AM","10:00 AM","11:00 AM",
  "1:00 PM","2:00 PM","3:00 PM",
  "4:00 PM","5:00 PM","6:00 PM",
];

// EmailJS config — .env se aa raha hai
const EMAILJS_SERVICE_ID       = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_USER    = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
const EMAILJS_TEMPLATE_NOTIFY  = import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY;
const EMAILJS_PUBLIC_KEY       = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ScheduleModal = ({ isOpen, onClose, isDarkMode }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const today = new Date();
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  const bookingDate = selectedDay
    ? `${DAYS_SHORT[selectedDay.getDay()]}, ${MONTHS[selectedDay.getMonth()]} ${selectedDay.getDate()}`
    : "";

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) return;
    setError("");
    setIsSubmitting(true);

    const templateParams = {
      user_name:    formData.name,
      user_email:   formData.email,
      booking_date: bookingDate,
      booking_time: selectedSlot,
    };

    try {
      // 1. User ko confirmation email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_USER,
        { ...templateParams, to_email: formData.email },
        EMAILJS_PUBLIC_KEY
      );

      // 2. meri notification email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_NOTIFY,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsBooked(true);

      setTimeout(() => {
        setIsBooked(false);
        setSelectedDay(null);
        setSelectedSlot(null);
        setFormData({ name: "", email: "" });
        onClose();
      }, 3000);

    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Email send nahi hui. Dobara try karo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
    isDarkMode
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
  }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative p-8 rounded-2xl border max-w-md w-full ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <X size={20} className="cursor-pointer" />
            </button>

            {isBooked ? (
              /*  Success State */
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle size={24} className="text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-medium mb-2"
                >
                  Booking Confirmed!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {bookingDate} · {selectedSlot}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className={`text-sm mb-6 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
                >
               Confirmation email has been sent! ✉️
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center"
                >
                  <Sparkles className="text-yellow-500" size={24} />
                </motion.div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-1">Schedule a Call</h3>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-blue-500" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      30 min · Video / Phone
                    </span>
                  </div>
                </div>

                {/* Day Picker */}
                <div className="mb-5">
                  <p className={`text-xs uppercase tracking-widest font-medium mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    Select a date
                  </p>
                  <div className="grid grid-cols-7 gap-1">
                    {next7Days.map((date, i) => {
                      const isDisabled = i === 0;
                      const isSelected = selectedDay?.toDateString() === date.toDateString();
                      return (
                        <motion.button
                          key={i}
                          whileHover={!isDisabled ? { scale: 1.05 } : {}}
                          whileTap={!isDisabled ? { scale: 0.95 } : {}}
                          disabled={isDisabled}
                          onClick={() => { setSelectedDay(date); setSelectedSlot(null); }}
                          className={`flex flex-col items-center py-2 rounded-xl border text-center transition-all duration-200 ${
                            isDisabled
                              ? "opacity-30 cursor-not-allowed border-transparent"
                              : isSelected
                              ? "bg-blue-500 border-blue-500 text-white"
                              : isDarkMode
                              ? "border-gray-600 hover:border-blue-500"
                              : "border-gray-200 hover:border-blue-400"
                          }`}
                        >
                          <span className="text-[10px] mb-1 opacity-80">{DAYS_SHORT[date.getDay()]}</span>
                          <span className="text-sm font-medium">{date.getDate()}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <AnimatePresence>
                  {selectedDay && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-5 overflow-hidden"
                    >
                      <p className={`text-xs uppercase tracking-widest font-medium mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                        Available times
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <motion.button
                            key={slot}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                              selectedSlot === slot
                                ? "bg-blue-500 border-blue-500 text-white"
                                : isDarkMode
                                ? "border-gray-600 hover:border-blue-500"
                                : "border-gray-200 hover:border-blue-400"
                            }`}
                          >
                            {slot}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form */}
                <AnimatePresence>
                  {selectedSlot && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {/* Summary Pill */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4 ${
                        isDarkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                      }`}>
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {bookingDate} · {selectedSlot}
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input
                          className={inputCls}
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                          className={inputCls}
                          placeholder="Email address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      {/* Error */}
                      {error && (
                        <p className="text-red-500 text-xs mt-1 mb-2">{error}</p>
                      )}

                      <motion.button
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.name || !formData.email}
                        className="w-full mt-3 cursor-pointer bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          "Confirm Booking"
                        )}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScheduleModal;