import React, { useState } from "react";
import { useHistory } from "react-router";
import { isInTheFuture, isNotOnTuesday } from "../utils/date-time";

export default function Form({
  initialFormData,
  handleFormChange,
  handleSubmit,
}) {
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleCancel = () => {
    history.goBack();
  };

  const validateReservation = (formData) => {
    if (!isInTheFuture(formData.reservation_date)) {
      setError("Reservation date must be in the future.");
      return false;
    }
    if (isNotOnTuesday(formData.reservation_date)) {
      setError("Reservation date cannot be on a Tuesday.");
      return false;
    }
    // Additional validation logic can be added here if needed
    return true;
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-group">
        <fieldset>
          <legend className="d-flex justify-content-center">
            Guest Information
          </legend>
          <div className="pb-1">
            <input
              type="text"
              name="first_name"
              className="form-control"
              id="first_name"
              placeholder={initialFormData?.first_name || "First Name"}
              value={initialFormData?.first_name}
              onChange={handleFormChange}
              required
            />
            <input
            type="text"
            name="last_name"
            className="form-control"
            id="last_name"
            placeholder={initialFormData?.last_name || "Last Name"}
            value={initialFormData?.last_name}
            onChange={handleFormChange}
            required
            />
          </div>
          {/* Add other input fields here */}
        </fieldset>
        <input
          type="date"
          name="reservation_date"
          className="form-control mb-1"
          id="reservation_date"
          placeholder={initialFormData?.reservation_date || "YYY-MM-DD"}
          value={initialFormData?.reservation_date}
          onChange={handleFormChange}
          required
        />
        <input
        type="time"
        name="reservation_time"
        className="form-control"
        id="reservation_time"
        placeholder={initialFormData?.reservation_time || "HH:MM"}
        value={initialFormData?.reservation_time}
        onChange={handleFormChange}
        required
        />
        <div className="d-flex justify-content-center pt-2">
          <button type="submit" className="btn btn-primary mr-1">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
