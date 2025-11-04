import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="new-container">
        <div className="new-content">
          <div className="new-text">
            <h3 className="new">NEW PRODUCT</h3>
            <h1 className="new-head">XX99 MARK II HEADPHONES</h1>
            <p className="new-txt">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>

            <Link 
              href="/products/xx99-mark-ii-headphones" 
              className="new-inline"
            >
              SEE PRODUCT
            </Link>
          </div>

          {/* Space for image */}
          <div className="new-image">
            <Image 
              src="/images/products/xx99ii.png" 
              alt="XX99 Mark II Headphones" 
              width={400} 
              height={400} 
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3-Row Product Section */}
      <section className="new-product-section">
        <div className="new-product-card">
          <Image 
            src="/images/products/xx99ii.png" 
            alt="Headphones" 
            width={200} 
            height={200} 
            className="new-product-image"
          />
          <h2 className="product-title">HEADPHONES</h2>
          <Link href="/headphones" className="new-product-link">SHOP →</Link>
        </div>

        <div className="new-product-card">
          <Image 
            src="/images/products/zx9.png" 
            alt="Speakers" 
            width={200} 
            height={200} 
            className="new-product-image"
          />
          <h2 className="new-product-title">SPEAKERS</h2>
          <Link href="/speakers" className="new-product-link">SHOP →</Link>
        </div>

        <div className="new-product-card">
          <Image 
            src="/images/products/yx1.png" 
            alt="Earphones" 
            width={200} 
            height={200} 
            className="new-product-image"
          />
          <h2 className="new-product-title">EARPHONES</h2>
          <Link href="/earphones" className="new-product-link">SHOP →</Link>
        </div>
      </section>








        {/* 2-column Product Section */}
        <section className="new-center-section">
        <div className="new-center-card zx9-card">
          <Image 
            src="/images/products/zx9.png" 
            alt="Headphones" 
            width={200} 
            height={200} 
            className="new-center-image"
          />
        <div className="new-wrap">
                    <h2 className="new-center-title">ZX9 SPEAKER</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly   remarkable sound.</p>
                    <Link href="/headphones" className="new-center-link">SEE PRODUCT</Link>
        </div>
        </div>

        <div className="new-center-card">
            <div className="new-wrap">
            <h2 className="new-center-title">ZX7 SPEAKERS</h2>
            <Link href="/headphones" className="new-center-link">SEE PRODUCT</Link>
            </div>
          <Image 
            src="/images/products/zx7 table.png" 
            alt="Speakers" 
            width={200} 
            height={200} 
            className="new-center-image"
          />
          
        </div>

      </section>










      <section className="new-product-section">
        <div className="new-sect">
          <Image 
            src="/images/products/yx1 buds.png" 
            alt="Headphones" 
            width={200} 
            height={200} 
            className="new-sect-image"
          />
          
        </div>

        <div className="new-sect">
            <h2 className="new-sect-title">YX1 EARPHONES</h2>
            <Link href="/headphones" className="new-center-link">SEE PRODUCT</Link>
        </div>

      </section>




























    <div className="all-foot-container">
          
        <div className="all-foot-wrap">
                    <h2 className="all-foot-title">BRINGING YOUR BEST AUDIO GEAR</h2>
                    <p>Bringing you the best audio gear
Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>


        <Image 
            src="/images/products/ego.png" 
            alt="Headphones" 
            width={200} 
            height={200} 
            className="all-foot-image"
          />
    </div>












    </>
  );
}
