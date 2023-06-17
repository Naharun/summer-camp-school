import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAuth from "../../Routes/useAuth";
// import useAdmin from "../../hooks/useAdmin";
// import useInstructor from "../../hooks/useInstructor";


const ClassCard = ({ classData }) => {
    // const navigate = useNavigate();
    // const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor();
    // const {user} = useAuth();
    const { _id, img, className, availableSeats, price, instructorName, instructorEmail, details } = classData;
    

    const handleSelectClass = (classData) => {
        console.log(classData);
        // if(user && user.email){
        //     const selectedClass = {selectedClassId: _id, img,  className, availableSeats, price, instructorName, instructorEmail,details, email: user.email}
        //     fetch('https://teaching-corner-server.vercel.app/selected', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(selectedClass)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         if(data.insertedId){
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: 'Class added on the selected list.',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //               })
        //         }
        //     })
        // }
        // else{
        //     Swal.fire({
        //         title: 'Please login to order the food',
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Login now!'
        //       }).then((result) => {
        //         if (result.isConfirmed) {
        //           navigate('/login', {state: {from: location}})
        //         }
        //       })
        // }
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl" >
                <figure className="h-1/2"><img src={img} alt="class" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p>Instructor Name: <span className="font-semibold ">{instructorName}</span></p>
                    <p>Price: $ <span className="font-semibold ">{price}</span></p>
                    <p>Available Seats: <span className="font-semibold ">{availableSeats}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handleSelectClass (classData)} disabled className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;