import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.coffeeName.value;
        const quantity = form.availableQuantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Added Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold">Add Coffee</h1>
            <form className="space-y-8" onSubmit={handleAddUser}>
                {/* Form coffee and quantity row */}
                <div className="flex gap-5">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="name">Coffee Name</label>
                        <input type="text" name="coffeeName" id="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="quantity">Available Quantity</label>
                        <input type="text" name="availableQuantity" id="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Form supplier and taste row */}
                <div className="flex gap-5">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="name">Supplier Name</label>
                        <input type="text" name="supplier" id="name" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="quantity">Taste</label>
                        <input type="text" name="taste" id="quantity" placeholder="Taste" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Form category and details row */}
                <div className="flex gap-5">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="name">Category</label>
                        <input type="text" name="category" id="name" placeholder="Category" className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="quantity">Details</label>
                        <input type="text" name="details" id="quantity" placeholder="Details" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* Form photo row */}
                <div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name">Photo URL</label>
                        <input type="text" name="photo" id="name" placeholder="Photo url" className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-black text-white hover:text-black"/>
            </form>
        </div>
    );
};

export default AddCoffee;