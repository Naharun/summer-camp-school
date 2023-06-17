import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AddClass = () => {
    const {user}= useContext(AuthContext);
    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const instructorName = form.instructorName.value;
        const className = form.className.value;
        const instructorEmail = form.instructorEmail.value;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;
        const details = form.details.value;
        const add = { photo,  instructorName, className, instructorEmail, price, availableSeats, details,}
        console.log(add);
        fetch('http://localhost:5000/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                // form.reset();
                console.log(data)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 w-[1000px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body w-[800px]">
                        <h2 className="text-2xl font-bold">Add A Class</h2>
                        <form onSubmit={handleAddClass} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" name="className" placeholder="Class Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" name="instructorName"  placeholder="Seller Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" name="instructorEmail" defaultValue={user?.email} readOnly placeholder="Instructor Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Available Seats</span>
                                </label>
                                <input type="text" name="availableSeats" placeholder="Available Seats" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Details" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Add A Class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddClass;