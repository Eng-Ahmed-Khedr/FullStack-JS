import "./hero.css";

export default function Hero() {
    return (
        <>
            <section className="hero d-flex flex-column justify-content-center">
                <div className="container d-flex flex-column align-items-center">
                    <h1>Largest Classifieds In The World</h1>
                    <p>You can buy, sell anything you want.</p>
                    <form action="#" className="form justify-content-center align-items-center">
                        <div className="row align-items-center w-100">
                            <div className="col-xl-4">
                                <div className="form-control">
                                    <input type="text" name="keyword" placeholder="What are you looking for?" />
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="form-control">
                                    <input type="text" name="keyword" placeholder="Loction" />
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="form-control">
                                    <select name="category" id="category" className="form-select">
                                        <option selected>All Categories</option>
                                        <option value="realEstate">Real Estate</option>
                                        <option value="booksAndMagazines">Books & Magazines</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="carsAndVechicels">Cars & Vechicels</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <button type="button" className="btn w-100">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}