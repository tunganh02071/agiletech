/* eslint-disable react/jsx-props-no-spreading */
// libarary
import bind from "classnames/bind";
import { memo } from "react";
import { GrLinkNext } from "react-icons/gr";

// styles
import Testimonials from "src/components/elements/Testimonials/Testimonials";
import { useQuery } from "@tanstack/react-query";
import { TESTIMONIALS } from "src/utils/utils";
import { Spinner } from "react-bootstrap";
import { getTestimonials } from "src/api/serviceApi";
import styles from "./HomePage.module.scss";

const cx = bind.bind(styles);

const HomePage = memo(() => {
  const { data, isLoading }: any = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTestimonials(TESTIMONIALS),
  });
  if (isLoading) {
    return (
      <div className="loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  const dataTestimonials = data?.data;
  return (
    <div className={cx("body-page")}>
      <div className="container">
        <div className={cx("body-page__title")}>
          <h1>Features</h1>
          <p>
            Some of the features and advantages that we provide for those of you
            <br />
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className={cx("body-page__content")}>
          <div className={cx("body-page__content--item")}>
            <div className={cx("image-content")}>
              <img
                className={cx("image")}
                src="https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1676851200&Signature=HiO5E7CAUKP6Az~7dlqtsWQ90hnZVZcjvfzazKDlSkE8eH1nIUBRF0IvoMOHy2Em9geqZU4N2GapOMDxOG7QQa3bwty6riSePcmK4cMoj-ivEYq3nh9877MZz4AH96eX7JxUqesc3hahRqSchdcBKnquCjDK1gOosDE2KCT20EZmF7XBui-82ZOkVe4PpSGojNmxOi55lZ~ARXoiG8NljnZ7wGsWJHotJE-Uuhyjx5NjNHiltdBXGQP1jgTr6TOMhykYFRk3-zFVUlGy058IhYX~Lj4wZThJsgsqc1X9zHZ627NyrdKeUT310Z55I4SB1jeUp9UfvgcC3lu6SP1TWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Search Data"
              />
            </div>
            <div className={cx("text-content")}>
              <div className={cx("text")}>
                <h1>Search Data</h1>
                <p>
                  Don’t worry if your data is very large, the Data Warehoue
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </p>
                <div className={cx("learn-more")}>
                  <p>Learn More</p>
                  <GrLinkNext />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("body-page__content--item")}>
            <div className={cx("image-content")}>
              <img
                className={cx("image")}
                src="https://s3-alpha-sig.figma.com/img/4848/bd8b/6441ecd1919c84f36a65eabdc8138a2c?Expires=1676851200&Signature=ARtSqHt3FLXJIZrQTvKm6oAh65XYpfcqwbpxEfOJbhDNrzk9WupeUiyshg8MSAjwPCf0r0j4K1VsFiVTF3p412P5zq83DLIzhjUhT6Aj71o48p6XnsvJeDAJDcwAQfbiqjb~B4AeBs8mTb-tsdhM0MsTXhyWa8Fwu8r5T7uql8GcCm7loi2TUAx3ZDTK~c8-h2U4nHqlqc40k7fnDMJ4OgHt12ene9QkNc-RSZ1dKvwqvMbuLf~HZSMgjRfVX29jmmF2NoMgFFhV6300H8BiU~tk5Eq5yoCyc0uERb1whioVoxIJSfOy3rN7fWTs8bDm1Bk6MsfkSAglLtGvMzpc2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Search Data"
              />
            </div>
            <div className={cx("text-content")}>
              <div className={cx("text")}>
                <h1>24 Hours Access</h1>
                <p>
                  Access is given 24 hours a full morning to night and meet
                  again in the morning, giving you comfort when you need data
                  when urgent.
                </p>
                <div className={cx("learn-more")}>
                  <p>Learn More</p>
                  <GrLinkNext />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("body-page__content--item")}>
            <div className={cx("image-content")}>
              <img
                className={cx("image")}
                src="https://s3-alpha-sig.figma.com/img/cc12/c28f/2f3e743d08b2c66de2a7a23d4228df91?Expires=1676851200&Signature=HgZpxT2bb6K7y1b2JXRiyGxuLgc~RtpO~FK4pHY1GaxdHwBswlHmfKltOl3gFerqmanS2SlIBsrD672iuBUYCUoBdPa7zdBTcvUXQUZGDq-HWQ6N46TUh6d40SGa7ShWeB2CBzwE4umCPaSnHC9sOAuUHWOksqAEmv9ID~AdClxHuneUHexHyOgx0NKSFcOUDO-we2l-qY2sv1czij6RCmFkZBND93iLBxHeNUN5PLjEXqdmpaURshLcDsb615KpKAds-k4TpcaKFhWCNO6rf2arZzcsnw6kIBSNqU55UT1-LphsheiKY2wBZqOxXzAauo3lrqq3e1GzqinYpJPSkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Search Data"
              />
            </div>
            <div className={cx("text-content")}>
              <div className={cx("text")}>
                <h1>Print Out</h1>
                <p>
                  Print out service gives you convenience if someday you need
                  print data, just edit it all and just print it.
                </p>
                <div className={cx("learn-more")}>
                  <p>Learn More</p>
                  <GrLinkNext />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("body-page__content--item")}>
            <div className={cx("image-content")}>
              <img
                className={cx("image")}
                src="https://s3-alpha-sig.figma.com/img/9b0c/ad9e/af78d7add1e7940c7af1b7f896b757e0?Expires=1676851200&Signature=JnZAkF3REy3uBxvmACpTigxtHvhzZ4gqrtR2-zd0x7WCNotW7DhhQbLTAWTBaFEgQwbS022cX9Qsz0qE05QAm~C8Q9GAzoppyUS4UXeXwkvshn5TP~UxG91Pg6C1N-jpPCIE~am3rD7MnAhHUhz8L9oWzfdZbRBWuDd4ce7n1P~q7GVzPfbCUJx-Qwztjjph3a8jNbrhon-q8QL05VM0fYq6ddYNa~4sonRGcJ37bU3Djl09gm~eyE4S~G1qYopP1P8aTOJe5St1WPbjIS0ZF88KMWHD5UTu25kAtzTgfzLeKzF5FJY-TIJQ5dKu~mpCOt2Oima0EaF-jHSHvxfaoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Search Data"
              />
            </div>
            <div className={cx("text-content")}>
              <div className={cx("text")}>
                <h1>Security Code</h1>
                <p>
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <div className={cx("learn-more")}>
                  <p>Learn More</p>
                  <GrLinkNext />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("body-page__slider")}>
        <div className="container">
          <div className={cx("slider")}>
            <p>Testimonials</p>
            <Testimonials dataTestimonials={dataTestimonials} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
});

export default HomePage;
