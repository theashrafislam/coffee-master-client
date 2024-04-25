import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;
    const handleDelete = _id => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaing = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaing)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full p-5">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Quantity: {supplier}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end flex-col items-end">
                        <button className="btn ">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn ">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;