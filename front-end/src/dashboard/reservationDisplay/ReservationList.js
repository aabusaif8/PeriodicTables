import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SeatReservation from "../../layout/seat/SeatReservation"
export default function ReservationRow({ reservation, cancelRes }) {
  function handleCancel() {
    return window.confirm(
      "Do you want to cancel this reservation? This cannot be undone."
    )
      ? cancelRes(reservation)
      : null;
  }

  return (
    <tr>
      <th scope="row">{reservation.reservation_id}</th>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.people}</td>
      <td>{reservation.reservation_time}</td>
      <td data-reservation-id-status={reservation.reservation_id}>
        {reservation.status}
      </td>
      <Link
  className="btn btn-secondary center-button"
  role="button"
  to={`/reservations/${reservation.reservation_id}/seat`}
>
  Seat
</Link>
      <td>
        <Link
      className="btn btn-secondary center-button"
      role="button"
      to={`/reservations/${reservation.reservation_id}/edit`}
      >
        Edit
        </Link>
      </td>
      <td>
        <button
          className="btn btn-danger"
          data-reservation-id-cancel={reservation.reservation_id}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}
