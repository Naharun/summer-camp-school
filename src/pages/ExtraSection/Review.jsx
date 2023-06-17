import ReactStars from "react-rating-stars-component";
import { HiOutlineThumbUp, HiOutlineShare } from "react-icons/hi";

const Review = () => {
    return (
        <div className="mx-auto p-6">
            <h2 className="text-xl font-bold">People review on our product  </h2>
            <p>5 Rating <ReactStars
                count={5}
                size={24}
                color="rgb(231, 101, 15) "
            />
                3 Reviews</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="bg-red-300 rounded-2xl p-7 font-bold">
                    <h2 className=" gap-3">Tanvir Sifat
                        <ReactStars
                            count={5}
                            size={24}
                            color="rgb(231, 101, 15 "
                        />
                    </h2>
                    <p>Very good company very low price</p>
                    <span className="flex gap-3 text-cyan-600">
                        <HiOutlineThumbUp /> <HiOutlineShare />
                    </span>
                </div>
                <div className="bg-red-300 rounded-2xl p-7 font-bold">
                    <h2 className=" gap-3">Raha Binty
                        <ReactStars
                            count={5}
                            size={24}
                            color="rgb(231, 101, 15) "
                        />
                    </h2>
                    <p>Excellent customer service good price!!!!</p>
                    <span className="flex gap-3 text-cyan-600">
                        <HiOutlineThumbUp /> <HiOutlineShare />
                    </span>
                </div>
                <div className="bg-red-300 rounded-2xl p-7 font-bold">
                    <h2 className=" gap-3">Suraiya Naznin
                        <ReactStars
                            count={5}
                            size={24}
                            color="rgb(231, 101, 15) "
                        />
                    </h2>
                    <p>Excellent Product</p>
                    <span className="flex gap-3 text-cyan-600">
                        <HiOutlineThumbUp /> <HiOutlineShare />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Review;