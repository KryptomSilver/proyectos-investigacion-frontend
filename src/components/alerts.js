import Swal from "sweetalert2";

export const AlertsSuccess = (mensaje) => {
    Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
    });
};

