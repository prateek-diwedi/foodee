import React from "react";
import "./Footer.scss"

export default function Footer() {

	return (
		<footer class="footer-distributed">

			<div class="footer-right">

				<a style={{ textDecoration: 'none', color: 'white' }} href="#"><i class="fa fa-facebook"></i></a>
				<a style={{ textDecoration: 'none', color: 'white' }} href="#"><i class="fa fa-twitter"></i></a>
				<a style={{ textDecoration: 'none', color: 'white' }} href="#"><i class="fa fa-instagram"></i></a>
				<a style={{ textDecoration: 'none', color: 'white' }} href="#"><i class="fa fa-pinterest"></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a style={{ textDecoration: 'none', color: 'white' }} class="link-1" href="#">Home</a>
					<a style={{ textDecoration: 'none', color: 'white' }} href="#">About</a>
					<a style={{ textDecoration: 'none', color: 'white' }} href="#">Contact</a>
				</p>

				<p>Foodee &copy; 2020</p>
			</div>
		</footer>
	)
}