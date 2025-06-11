"use client";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const generateTimeSlots = () => {
    return Array.from({ length: 9 }, (_, i) => `${i + 9}:00`); // 9 AM - 5 PM
  };

  const fetchBookedSlots = async (date) => {
    const q = query(collection(db, "appointments"), where("date", "==", date));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data().time);
  };

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setError("");
    try {
      const bookedSlots = await fetchBookedSlots(date);
      const allSlots = generateTimeSlots();
      setAvailableSlots(allSlots.filter((slot) => !bookedSlots.includes(slot)));
    } catch (err) {
      setError("Failed to fetch slots. Try again.");
    }
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;

    setIsSubmitting(true);
    setError("");

    try {
      // Test Firestore connection first
      const testRef = collection(db, "test_connection");
      await addDoc(testRef, { test: true });

      // Proceed with booking
      await addDoc(collection(db, "appointments"), {
        date: selectedDate,
        time: selectedTime,
        bookedAt: new Date().toISOString(),
      });

      setSuccess(true);
      await handleDateChange(selectedDate);
    } catch (err) {
      console.error("Firestore error:", err);
      setError("Network error. Please refresh and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Book an Appointment
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Available Slots
            </label>
            {availableSlots.length > 0 ? (
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a time</option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-red-500">No slots left for this date.</p>
            )}
          </div>
        )}

        {selectedTime && (
          <button
            onClick={handleBooking}
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Booking..." : "Confirm Booking"}
          </button>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-center">Booked successfully! 🎉</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;
