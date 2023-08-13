window.addEventListener('load', () => {
    document.querySelector('body').classList.remove('loading')
    const sect1 = () => {
        const h1 = document.querySelector('h1');
        const h1Text = 'Web Development 101.';
        const h1Animation = () => {
            h1.innerHTML = h1Text.substring(0, h1.innerHTML.length + 1);
            if (h1.innerHTML.length == h1Text.length) {
                clearInterval(h1Animation);
            }
        };
        setInterval(h1Animation, 150);
    };
    const sect3 = () => {
        const imageReveal = document.querySelector('.image-reveal');
        imageReveal.addEventListener('mousemove', (event) => {
            imageReveal.style = `--x: ${event.x}px; --y: ${event.y}px`;
        })
    };
    const switcher = () => {
        const elements = document.querySelectorAll('form[data-switcher]');
        const body = document.querySelector('body');
        elements.forEach((form, key) => {
            form.querySelectorAll('input').forEach((input) => {
                input.addEventListener('change', () => {
                    const data = new FormData(form);
                    body.className = data.get(input.name);
                })
            });
        });
    };
    const scrollFix = () => {
        const id = location.hash.replace('#', '');
        if (!id) {
            return;
        }
        history.pushState("", "", `${location.pathname}${location.search}`);
        const element = document.getElementById(id);
        element.scrollIntoView(true);
    };

    sect1();
    sect3();
    switcher();
    scrollFix();
});