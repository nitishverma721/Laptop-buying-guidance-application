const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="../img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Laptops</li>
                    <li><a href="#" class="footer-link">Gaming</a></li>
                    <li><a href="#" class="footer-link">Core i3</a></li>
                    <li><a href="#" class="footer-link">Core i5</a></li>
                    <li><a href="#" class="footer-link">Core i7</a></li>
                    <li><a href="#" class="footer-link">2 in 1</a></li>
                    <li><a href="#" class="footer-link">MSI</a></li>
                    <li><a href="#" class="footer-link">ROG</a></li>
                    <li><a href="#" class="footer-link">Chrome books</a></li>
                </ul>
            </div>
            
        </div>
    <p class="footer-title">about website</p>
    <p class="info">Hey everyone. Welcome to our website. The only place you need to consider while you are going to buy a laptop. You are a young student or a professional ? Whoever you are if you are facing difficulties in choosing which laptop you should buy then you are at the right place. Our website will guide you through which laptops you should buy which will fully cover all your needs and requirements. Just tell us your requirements and we will show you some of the best products which you can buy directly from your favourite ecommerce website.</p>
    <p class="info">Thankyou</p>
    <p class="info">support emails - help@laptop.com, customersupport@laptop.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="/privacy" class="social-link">terms & services</a>
            <a href="/privacy" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Laptop Buying Guide Application</p>
    `;
}

createFooter();