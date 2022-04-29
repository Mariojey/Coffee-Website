function toggleMobileMenu(menu) {
    menu.classList.toggle('active');
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');

    const navListMobile = document.querySelectorAll('.navListMobile');
    navListMobile.classList.toggle('active');
}

VanillaTilt.init(document.querySelectorAll(".boxOrigin"), {
    max: 25,
    speed: 400
});

const originText = document.getElementById('originText');
const etymology = document.getElementById('etymology');
const history = document.getElementById('history');
const biology = document.getElementById('biology');
const headOrigin = document.getElementById('head');
const pOriginText = document.getElementById('pOriginText');

etymology.addEventListener('click', () => {
    headOrigin.textContent = `Etymology Name`;
    pOriginText.textContent = `The word coffee entered the English language in 1582 via the Dutch koffie, borrowed from the Ottoman Turkish kahve (قهوه), borrowed in turn from the Arabic qahwah (قَهْوَة).[11] The Arabic word qahwah was traditionally held to refer to a type of wine whose etymology is given by Arab lexicographers as deriving from the verb قَهِيَ qahiya, 'to lack hunger', in reference to the drink's reputation as an appetite suppressant.

    The term coffee pot dates from 1705.[12] The expression coffee break was first attested in 1952.[12]`;

});

history.addEventListener('click', () => {
    headOrigin.textContent = `History of Coffee`;
    pOriginText.textContent = `The earliest credible evidence of coffee-drinking or knowledge of the coffee tree appears in the middle of the 15th century in the accounts of Ahmed al-Ghaffar in Yemen.[2] It was here in Arabia that coffee seeds were first roasted and brewed in a similar way to how it is prepared now. Coffee was used by Sufi circles to stay awake for their religious rituals.[13] Accounts differ on the origin of the coffee plant prior to its appearance in Yemen. From Ethiopia, coffee could have been introduced to Yemen via trade across the Red Sea.[14] One account credits Muhammad Ibn Sa'd for bringing the beverage to Aden from the African coast.[15] Other early accounts say Ali ben Omar of the Shadhili Sufi order was the first to introduce coffee to Arabia.[16] According to al Shardi, Ali ben Omar may have encountered coffee during his stay with the Adal king Sadadin's companions in 1401. Famous 16th-century Islamic scholar Ibn Hajar al-Haytami notes in his writings a beverage called qahwa developed from a tree in the Zeila region.[13] Coffee was first exported from Ethiopia to Yemen by Somali merchants from Berbera and Zeila in modern-day Somaliland, which was procured from Harar and the Abyssinian interior. According to Captain Haines, who was the colonial administrator of Aden (1839–1854), Mocha historically imported up to two-thirds of their coffee from Berbera-based merchants before the coffee trade of Mocha was captured by British-controlled Aden in the 19th century. Thereafter, much of the Ethiopian coffee was exported to Aden via Berbera.`;

});
biology.addEventListener('click', () => {
    headOrigin.textContent = 'Biology';
    pOriginText.textContent = `Several species of shrub of the genus Coffea produce the berries from which coffee is extracted. The two main species commercially cultivated are Coffea canephora (predominantly a form known as 'robusta') and C. arabica.[42] C. arabica, the most highly regarded species, is native to the southwestern highlands of Ethiopia and the Boma Plateau in southeastern Sudan and Mount Marsabit in northern Kenya.[43] C. canephora is native to western and central Subsaharan Africa, from Guinea to Uganda and southern Sudan.[44] Less popular species are C. liberica, C. stenophylla, C. mauritiana, and C. racemosa.

    All coffee plants are classified in the large family Rubiaceae. They are evergreen shrubs or trees that may grow 5 m (15 ft) tall when unpruned. The leaves are dark green and glossy, usually 10–15 cm (4–6 in) long and 6 cm (2.4 in) wide, simple, entire, and opposite. Petioles of opposite leaves fuse at the base to form interpetiolar stipules, characteristic of Rubiaceae. The flowers are axillary, and clusters of fragrant white flowers bloom simultaneously. Gynoecium consists of an inferior ovary, also characteristic of Rubiaceae. The flowers are followed by oval berries of about 1.5 cm (0.6 in).[45] When immature, they are green, and they ripen to yellow, then crimson, before turning black on drying. Each berry usually contains two seeds, but 5–10% of the berries[46] have only one; these are called peaberries.[47] Arabica berries ripen in six to eight months, while robusta takes nine to eleven months.`;

});