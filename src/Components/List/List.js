import { useState } from "react";
import { popularMovies, popularShows, movies } from "../../utils/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./List.scss";

function List() {
	const [setSwiperRef] = useState(null);

	return (
		<>
			<div className="list">
				<div className="listTitle">Popular Now</div>
				<Swiper
					onSwiper={setSwiperRef}
					slidesPerView={3}
					breakpoints={{
						768: {
							slidesPerView: 9,
						},
					}}
					centeredSlides={true}
					spaceBetween={30}
					navigation={true}
					modules={[Pagination, Navigation]}
					loop={true}
					className="mySwiper"
				>
					{popularMovies.map((item, index) => (
						<SwiperSlide>
							<div className="list_item"></div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<main>
				<div>
					<h1>Watch the best classic movies</h1>
					<p>Beauty and mystery are hidden under the sea. Explore with our application to know about Aquatic Animals.</p>
				</div>
				<div className="movies">
					<Swiper
						effect="coverflow"
						grabCursor={true}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 3,
							slideShadows: true
						}}
						loop={true}
						hashNavigation={{
							watchState: true,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={false}
						slidesPerView={2}
						breakpoints={{
							breakpoints: {
								640: {
									slidesPerView: 2
								},
								768: {
									slidesPerView: 1
								},
								1024: {
									slidesPerView: 2
								},
								1560: {
									slidesPerView: 3
								}
							}
						}}
						onSwiper={setSwiperRef}
						centeredSlides={true}
						modules={[EffectCoverflow, Pagination]}
						className="mySuperSwiper"
					>
						{movies.map((item, index) => (
							<SwiperSlide>
								<div className="superfab">
									<h2>{item.title}</h2>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</main>
			<div className="list">
				<div className="listTitle">Popular Shows</div>
				<Swiper
					onSwiper={setSwiperRef}
					slidesPerView={3}
					breakpoints={{
						768: {
							slidesPerView: 9,
						},
					}}
					centeredSlides={true}
					spaceBetween={30}
					navigation={true}
					modules={[Pagination, Navigation]}
					loop={true}
					className="mySwiper"
				>
					{popularShows.map((item, index) => (
						<SwiperSlide>
							<div className="list_item"></div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}

export default List;
