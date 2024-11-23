import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Brahma Disaster Management System',
        description: "Developed a disaster management system integrating drones and quadrupedal robots, improving rescue operations and response efficiency by 30%. Integrated real-time weather updates using the Weather API, enhancing disaster preparedness with 90% accuracy. Utilized Leaflet.js for an interactive map to display hospitals, shelters, and key points of interest, improving user navigation during emergencies. Enabled disaster reporting, missing person alerts, and evacuation requests, speeding up response times by 40%.",
        tools: ['Java', 'PHP', 'Leaflet.js', 'Weather API', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Finova – Banking Management System',
        description: 'Designed and initiated a finance management platform projected to handle 10,000+ users, enabling them to link multiple bank accounts, view transaction history, and transfer funds securely. Developed backend and frontend architecture, achieving 90% progress on authentication using Appwrite and implementing Plaid API integration to securely link 50+ financial institutions. Planned features include a transaction history page with filtering options and paginated results, aiming to reduce search time by 40%, and a funds transfer system projected to process 1M+ transactions annually. Integrated Dwolla API to enable real-time fund transfers with a latency of less than 2 seconds, enhancing platform reliability.',
        tools: ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'Appwrite', 'Plaid API', 'Dwolla API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Ninja Food – Food Ordering Web Application',
        description: 'Built a responsive web application to simplify food ordering, designed to handle 500+ daily users, with secure user authentication and a visually engaging dish gallery. Integrated Razorpay, enabling 100% secure and seamless payment processing for 50+ transactions daily. Developed a robust backend using PHP and MySQL to efficiently manage 1,000+ user accounts and real-time order tracking, ensuring a seamless user experience.',
        tools: ['HTML', 'CSS', 'PHP', 'MySQL', 'Razorpay'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'WeatherLens – Dynamic Weather Forecast Application',
        description: "WeatherLens is a dynamic weather forecast application built using PHP, JavaScript, and the Weather API. It provides accurate weather information for any location, featuring current conditions, a three-day forecast, and real-time weather alerts. The app uses Tailwind CSS for responsive styling.",
        tools: ['PHP', 'JavaScript', 'Weather API', 'Tailwind CSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },