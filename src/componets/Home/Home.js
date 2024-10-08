import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";

const Home = () => {
  return (
    <>
      <section className="content">
        <div className="content-text">
          <h1 className="content-heading">
            Discover your inner beauty with Blossom Glow Kit
          </h1>
          <p className="content-p">Great gift for yourself and loved ones</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="content-image">
          <img src={require("../../assets/img1.png")} alt="" />
        </div>
      </section>
      <section className="new-arrival">
        <div className="new-arrival-text">
          <img
            className="new-arrival-img"
            src={require("../../assets/img7.png")}
            alt=""
          />
          <h1 className="new-arrival-heading">New Arrivals</h1>
          <img
            className="new-arrival-img"
            src={require("../../assets/img6.png")}
            alt=""
          />
        </div>
        <p className="new-arrival-p">see all</p>
        <div className="new-arrival-cards">
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img5.png")}
                alt=""
              />
              <div className="card-discount-container">
                <div className="card-discount">-20%</div>
                <FontAwesomeIcon id="wish-list" icon={faHeart} />
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img4.png")}
                alt=""
              />
              <div className="card-discount-container">
                <div className="card-discount">-20%</div>
                <FontAwesomeIcon id="wish-list" icon={faHeart} />
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img3.png")}
                alt=""
              />
              <div className="card-discount-container">
                <div className="card-discount">-20%</div>
                <FontAwesomeIcon id="wish-list" icon={faHeart} />
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img2.png")}
                alt=""
              />
              <div className="card-discount-container">
                <div className="card-discount">-20%</div>
                <FontAwesomeIcon id="wish-list" icon={faHeart} />
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
        </div>
      </section>
      <section className="best-seller">
        <div className="best-seller-text">
          <img
            className="best-seller-img"
            src={require("../../assets/img7.png")}
            alt=""
          />
          <h1 className="best-seller-heading">Best Sellers</h1>
          <img
            className="best-seller-img"
            src={require("../../assets/img6.png")}
            alt=""
          />
        </div>
        <p className="best-seller-p">see all</p>
        <div className="best-seller-cards">
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img8.png")}
                alt=""
              />
              <div className="card-discount-container card-rated">
                Top Rated
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img9.png")}
                alt=""
              />
              <div className="card-discount-container card-rated">
                Top Rated
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img10.png")}
                alt=""
              />
              <div className="card-discount-container card-rated">
                Top Rated
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={require("../../assets/img11.png")}
                alt=""
              />
              <div className="card-discount-container card-rated">
                Top Rated
              </div>
            </div>
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <div className="card-rating">
              <Rating name="no-value" value={null} />
              <p className="card-rating-val">(0)</p>
            </div>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <p className="card-price">32$</p>
            <button className="card-btn">Add to bag</button>
          </div>
        </div>
      </section>
      <section className="glow-kit">
        <div className="glow-kit-container">
          <div className="glow-kit-text">
            <h1 className="glow-kit-heading">Blossom Glow Kit</h1>
            <p className="glow-kit-p">
              Reveal your skin's natural glow with our Lotus Glow Kit.
              Nourishing body and face creams with lotus extract provide deep
              hydration and rejuvenation. Suitable for all skin types. Vegan,
              cruelty-free, eco-friendly.
            </p>
            <ul className="glow-kit-ul">
              <li className="glow-kit-li"># GreatGift</li>
              <li className="glow-kit-li"># AntiAging</li>
              <li className="glow-kit-li"># GreatGift</li>
              <li className="glow-kit-li"># Ingredients</li>
              <li className="glow-kit-li"># Ingredients</li>
            </ul>
            <div className="glow-kit-btn-container">
              <button className="glow-kit-btn">Shop Now</button>
              <p className="glow-kit-exp">Explore More</p>
              <FontAwesomeIcon className="glow-kit-arrow" icon={faArrowRight} />
            </div>
          </div>
          <div className="glow-kit-img">
            <img src={require("../../assets/img12.png")} alt="" />
          </div>
        </div>
        <div className="glow-kit-container">
          <div className="glow-kit-img">
            <img src={require("../../assets/img13.png")} alt="" />
          </div>
          <div className="glow-kit-text">
            <h1 className="glow-kit-heading">Floral Essence Masks Sets</h1>
            <p className="glow-kit-p">
              Indulge in the beauty of nature with our Floral Essence Masks set.
              Each mask features a unique blend of flower extracts to hydrate
              and nourish your skin. Experience the essence of flowers in your
              skincare routine.
            </p>
            <ul className="glow-kit-ul">
              <li className="glow-kit-li"># GreatGift</li>
              <li className="glow-kit-li"># AntiAging</li>
              <li className="glow-kit-li"># GreatGift</li>
              <li className="glow-kit-li"># Ingredients</li>
              <li className="glow-kit-li"># Ingredients</li>
            </ul>
            <div className="glow-kit-btn-container">
              <button className="glow-kit-btn">Shop Now</button>
              <p className="glow-kit-exp">Explore More</p>
              <FontAwesomeIcon className="glow-kit-arrow" icon={faArrowRight} />
            </div>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="blog-text">
          <img
            className="blog-img"
            src={require("../../assets/img7.png")}
            alt=""
          />
          <h1 className="blog-heading">On The Blog</h1>
          <img
            className="blog-img"
            src={require("../../assets/img6.png")}
            alt=""
          />
        </div>
        <p className="blog-p">see all</p>
        <div className="blog-card-container">
          <div className="blog-card">
            <img
              className="card-img"
              src={require("../../assets/img16.png")}
              alt=""
            />
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <button className="blog-btn">Read More</button>
          </div>
          <div className="blog-card">
            <img
              className="card-img"
              src={require("../../assets/img15.png")}
              alt=""
            />
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <button className="blog-btn">Read More</button>
          </div>
          <div className="blog-card">
            <img
              className="card-img"
              src={require("../../assets/img14.png")}
              alt=""
            />
            <h4 className="card-heading">Lorem ipsum dolor sit amet.</h4>
            <p className="card-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, harum.
            </p>
            <button className="blog-btn">Read More</button>
          </div>
        </div>
      </section>
      <section className="quiz">
        <div className="quiz-text-container">
          <div className="quiz-container">
            <div className="quiz-img">
              <img
                className="quiz-img1"
                src={require("../../assets/img17.png")}
                alt=""
              />
              <img
                className="quiz-img2"
                src={require("../../assets/img18.png")}
                alt=""
              />
            </div>
            <div className="quiz-text">
              <h1 className="quiz-heading">The Skin Quiz.</h1>
              <p className="quiz-p">
                Meet the quiz that will curate a routine just just just as
                unique as you are.
              </p>
              <button className="quiz-btn">Explore More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="share">
        <div className="share-text">
          <img
            className="share-img"
            src={require("../../assets/img7.png")}
            alt=""
          />
          <h1 className="share-heading">
            Share how you blossomed with <span>#bloombeauty</span>
          </h1>
          <img
            className="share-img"
            src={require("../../assets/img6.png")}
            alt=""
          />
        </div>
        <p className="share-p">see all</p>
        <div className="share-container">
          <div className="share-card-container">
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img23.png")}
                alt=""
              />
            </div>
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img22.png")}
                alt=""
              />
            </div>
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img21.png")}
                alt=""
              />
            </div>
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img20.png")}
                alt=""
              />
            </div>
          </div>
          <div className="share-card-container share-margin">
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img19.png")}
                alt=""
              />
            </div>
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img24.png")}
                alt=""
              />
            </div>
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img25.png")}
                alt=""
              />
            </div>
            <div className="share-card">
              <img
                className="share-cart-img"
                src={require("../../assets/img26.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="share-btn-container">
          <button className="share-btn">Flow Us</button>
        </div>
      </section>
    </>
  );
};

export default Home;
