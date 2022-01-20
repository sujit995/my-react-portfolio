import port1 from '../img/portImages/port1.png';
import port2 from '../img/portImages/port2.png';
import port3 from '../img/portImages/port3.png';
import port4 from '../img/portImages/port4.png';
import memories from '../img/portImages/memories.png';
import chat from '../img/portImages/chat.png';
import movie from '../img/portImages/movie.png';

const portfolios = [
    {
        id: 1,
        category: 'Full Stack',
        title: "Memories App",
        about: "It is a simple social media application that allows users to post interesting events. The user can create, update and delete the post",
        link1: "https://sujit995-memories-app.netlify.app",
        link2: "https://github.com/sujit995/Memories-app-frontend",
        icon1: 'Live',
        icon2: 'Source',
        image: memories,
        title: 'Memories App'
    },
    {
        id: 2,
        category: 'Full Stack',
        about: "This app make it convenient and engaging for customers to buy food online",
        link1: 'https://sujit995-onlinefood-delivery.netlify.app',
        link2: 'https://github.com/sujit995/food-order-app',
        icon1: 'Live',
        icon2: 'Source',
        image: port1,
        title: 'Online Food Ordering App',
    },
    {
        id: 3,
        category: 'Full Stack',
        about: "Responsive gallery for posting and viewing images in a secure and simple manner",
        link1: 'https://sujit995-photo-gallery.netlify.app',
        link2: 'https://github.com/sujit995/photo-gallery-app',
        icon1: 'Live',
        icon2: 'Source',
        image: port2,
        title: 'Photo Gallery App'
    },
    {
        id: 4,
        category: 'React Js',
        about: "An User can search and see the information about their favorite movie",
        link1: 'https://sujit995-movie-app.netlify.app',
        link2: 'https://github.com/sujit995/movie-details-app',
        icon1: 'Live',
        icon2: 'Source',
        image: port3,
        title: 'Movie Details App'
    },
    {
        id: 5,
        category: 'Full Stack',
        about: "This is a simple chat app where users can group chat with each other. An user need to signin before chatting in a group.",
        link1: "https://mini-chat-app.netlify.app",
        link2: "https://github.com/sujit995/mini-chat-app",
        icon1: 'Live',
        icon2: 'Source',
        image: chat,
        title: "Chat App",
    },
    {
        id: 6,
        category: 'React Js',
        link1: 'https://sujit995-petshop.netlify.app',
        link2: 'https://github.com/sujit995/pet-shop-website',
        icon1: 'Live',
        icon2: 'Source',
        image: port4,
        title: 'Pet-shop SPA'
    },
]

export default portfolios;