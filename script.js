// Код для випадаючого сабменю в мобайл версії, стилі вже в цьому коді

addEventListener("DOMContentLoaded", (event) => {

	const menuParent = document.querySelectorAll('.header_mobile ul li.menu-item-mobile')
	menuParent.forEach(el=>{
		el.querySelector('.menu-item-wrapper-mobile').addEventListener('click', function(){
			el.classList.toggle('active')
			const self = this
			this.slideUp = ( target, duration = 300 ) => {
				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.boxSizing = 'border-box';
				target.style.height = target.offsetHeight + 'px';

				target.offsetHeight;

				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;

				window.setTimeout( () => {
					target.style.display = 'none';
					target.style.removeProperty( 'height' );
					target.style.removeProperty( 'padding-top' );
					target.style.removeProperty( 'padding-bottom' );
					target.style.removeProperty( 'margin-top' );
					target.style.removeProperty( 'margin-bottom' );
					target.style.removeProperty( 'overflow' );
					target.style.removeProperty( 'transition-duration' );
					target.style.removeProperty( 'transition-property' );
				}, duration );
			};
			this.slideDown = ( target, duration = 500 ) => {
				target.style.removeProperty( 'display' );

				let display = window.getComputedStyle( target ).display;

				if ( display === 'none' ) {
					display = 'block';
				}

				target.style.display = display;

				const height = target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;

				target.offsetHeight;

				target.style.boxSizing = 'border-box';
				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.height = height + 'px';

				target.style.removeProperty( 'padding-top' );
				target.style.removeProperty( 'padding-bottom' );
				target.style.removeProperty( 'margin-top' );
				target.style.removeProperty( 'margin-bottom' );

				window.setTimeout( () => {
					target.style.removeProperty( 'height' );
					target.style.removeProperty( 'overflow' );
					target.style.removeProperty( 'transition-duration' );
					target.style.removeProperty( 'transition-property' );
				}, duration );
			};
			this.slideToggle = ( target, duration = 300 ) => {
				if ( window.getComputedStyle( target ).display === 'none' ) {
					return self.slideDown( target, duration );
				}
				return self.slideUp( target, duration );
			};
			this.slideToggle(el.querySelector('.sub-menu-mobile'))

		})
	})

});



// це в html
<div class="header_mobile" style="height: 100vh; visibility: visible; opacity: 1;">
                    <ul>    
                                <li>
                                    <a href="https://kamagra-plus.com">
                                        Naslovna
                                    </a>
                                </li>
                                // ---------------------
                                          // тут все
                                <li class="menu-item-mobile">
                                    <div class="menu-item-wrapper-mobile">
                                        Kamagra proizvodi
                                        <span class="menu-item-icon menu-item-icon-mobile"></span>
                                    </div>

                                    <ul class="sub-menu-mobile">
                                        <li><a href="https://kamagra-plus.com/proizvod/kamagra-gel">Kamagra Gel</a></li>
                                        <li><a href="https://kamagra-plus.com/proizvod/Kamagra-sumece-Tablete">Kamagra Šumeće</a></li>
                                        <li><a href="https://kamagra-plus.com/proizvod/kamagra-tablete">Kamagra Tablete</a></li>
                                        <li><a href="https://kamagra-plus.com/proizvod/kamagra-zvake-bonboni">Kamagra Žvake</a></li>
                                    </ul>
                                </li>
                              // ---------------------
                                <li>
                                    <a href="https://kamagra-plus.com/erektilna-disfunkcija.php">
                                        Erektilna disfunkcija
                                    </a>
                                </li>

                                <li>
                                    <a href="https://kamagra-plus.com/impotencija.php">
                                        Impotencija
                                    </a>
                                </li>
                                <li>
                                    <a href="https://kamagra-plus.com/provjereni-proizvodi.php">
                                        Provjerni proizvodi
                                    </a>
                                </li>
                                <li>
                                    <a href="https://kamagra-plus.com/sildenafil.php">
                                        Sildenafil
                                    </a>
                                </li> 
                            </ul>
                    <button class="btn_style-2 icon-trolley narudzba js-open-cart">
                        <span>NARUČI</span>
                    </button>
                    <button class="btn_style-1 icon-convert">
                        <span>Povratne informacije</span>
                    </button>
                    <div class="header_mobile-icons">
                        <a href="/">
                            <i style="background-image: url('https://kamagra-plus.com/img/svg/instagram.svg')" class="icon-network"></i>
                        </a>
                        <a href="/">
                            <i style="background-image: url('https://kamagra-plus.com/img/svg/facebook.svg')" class="icon-network"></i> 
                        </a>
                    </div>
                </div>
