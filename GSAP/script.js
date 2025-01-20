//to vs from - to end point of animation tak leke jata hai, from me initial point hi final position hota hai

//timeline
// var tl = gsap.timeline()


// tl.from("h1", {
//     y: 300,
//     opacity: 0,
//     duration: 3,
//     ease: "expo.out",
// })

// tl.from("h2", {
//     y: 300,
//     opacity: 0,
//     duration: 3,
//     ease: "expo.out",
// })

//Scroll based animation

// ScrollTrigger

// gsap.to(".box1", {
//     x: 200,
//     scale: 1.5,
//     duration: 2,
//     ease: "elastic.inOut(1, 0.3)",
// })

// gsap.to(".box2", {
//     x: 200,
//     scale: 1.5,
//     y: 200,
//     rotate: 180,
//     backgroundColor: "red",
//     duration: 2,
//     scrollTrigger: {
//         trigger: ".page2",
//         markers: true,
//         start: "top top",
//         end: "bottom 80%",
//         scrub: true,
//         pin: true,
//     }
// })

// gsap.to(".container", {
//     x: -1000,
//     scrollTrigger: {
//         trigger: ".page2",
//         start: "top top",
//         end: "bottom 80%",
//         scrub: true,
//         pin: true,
//         markers: true,
//     }
// })

// var h1 = document.querySelector("h1");
// var h1Text = h1.textContent;

// var splittedText = h1Text.split("")

// console.log(splittedText);

// var clutter = "";

// splittedText.forEach(function (value) {
//     // clutter = clutter + "<span>" + value + "</span>";
//     clutter += `<span> ${value} </span>`;
// })

// h1.innerHTML = clutter;

// gsap.from("h1 span", {
//     y: 1000,
    // color: "green",
    // opacity: 0.5,
    // delay: 0.5,
    // duration: 3,
    // stagger: 0.2,
    // scale: 0,
    // scrollTrigger: {
    //     trigger: "h1",
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //     markers: true,
    // }
// })
