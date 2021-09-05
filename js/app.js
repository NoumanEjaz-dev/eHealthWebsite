

        var nav = document.querySelector('#nav');
        var nav2 = document.querySelector('#nav2');
        var nav3 = document.querySelector('#nav3');

        const toggle = () => {
            nav.style.display = 'block';
            nav.style.transition = '0.9s';
            nav2.style.display = 'none';
            nav3.style.display = 'none';
        }

        const toggle2 = () => {
            nav4.style.display = 'block';
            nav4.style.transition = '0.9s';
        }
        const isOPen2 = () => {
            nav4.style.display = 'none';
        }

        const isOPen = () => {
            nav.style.display = 'none';
            nav2.style.display = 'none';
            nav3.style.display = 'none';
        }

        const displaySafety = () => {
            nav.style.display = 'none';
            nav2.style.display = 'block';
        }

        const displayAcademy = () => {
            nav.style.display = 'none';
            nav2.style.display = 'none';
            nav3.style.display = 'block';
        }