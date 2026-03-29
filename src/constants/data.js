import anna from "../assets/anna.webp";
import unicamp from "../assets/unicamp.webp";
import esp32 from "../assets/esp32.webp";
import unipass from "../assets/unipass.webp";
import ac7 from "../assets/ac7.webp";
import workwize from "../assets/workwize.webp";

export const offline_data = [
    {
        "__typename": "Project",
        "title": "Anna’s Portfolio",
        "featuredImage": {
            "__typename": "NodeWithFeaturedImageToMediaItemConnectionEdge",
            "node": {
                "__typename": "MediaItem",
                "sourceUrl": anna,
                "altText": ""
            }
        },
        "fields": {
            "__typename": "Fields",
            "description": "A commissioned web portfolio using Next.js and Wordpress (headless CMS)",
            "link": "annadesigner.vercel.app",
            "role": "Fullstack Developer",
            "stack": "Next.js, Tailwind CSS, Wordpress (Headless CMS)"
        }
    },
    {
        "__typename": "Project",
        "title": "Unicamp",
        "featuredImage": {
            "__typename": "NodeWithFeaturedImageToMediaItemConnectionEdge",
            "node": {
                "__typename": "MediaItem",
                "sourceUrl": unicamp,
                "altText": "unicamp"
            }
        },
        "fields": {
            "__typename": "Fields",
            "description": "Web-based admin application designed to help administrators efficiently manage campus facilities",
            "link": "https://github.com/pacasiano/uni_camp",
            "role": "Frontend Developer",
            "stack": "Flutter, Material, Firebase"
        }
    },
    {
        "__typename": "Project",
        "title": "SensorStack",
        "featuredImage": {
            "__typename": "NodeWithFeaturedImageToMediaItemConnectionEdge",
            "node": {
                "__typename": "MediaItem",
                "sourceUrl": esp32,
                "altText": "sensorstack"
            }
        },
        "fields": {
            "__typename": "Fields",
            "description": "ESP32 Environmental Monitoring System with Blynk",
            "link": "https://github.com/pacasiano/SensorStack",
            "role": "Embedded Systems Developer",
            "stack": "Arduino, Blynk IoT Platform"
        }
    },
    {
        "__typename": "Project",
        "title": "UniPASS",
        "featuredImage": {
            "__typename": "NodeWithFeaturedImageToMediaItemConnectionEdge",
            "node": {
                "__typename": "MediaItem",
                "sourceUrl": unipass,
                "altText": "unipass"
            }
        },
        "fields": {
            "__typename": "Fields",
            "description": "A Parking Management System for Ateneo de Davao University",
            "link": "https://unipass.arisenlab.org",
            "role": "UI/UX & Frontend Developer",
            "stack": "Vue.js, Tailwind CSS, Laravel, MySQL"
        }
    },
    {
        "__typename": "Project",
        "title": "AC7",
        "featuredImage": {
            "__typename": "NodeWithFeaturedImageToMediaItemConnectionEdge",
            "node": {
                "__typename": "MediaItem",
                "sourceUrl": ac7,
                "altText": "ac7"
            }
        },
        "fields": {
            "__typename": "Fields",
            "description": "E-commerce website for a beauty brand",
            "link": "https://github.com/pacasiano/AC7",
            "role": "Fullstack Developer",
            "stack": "React.js, Tailwind CSS, Node.js, Express.js"
        }
    },
    {
        "__typename": "Project",
        "title": "Workwize",
        "featuredImage": {
            "__typename": "NodeWithFeaturedImageToMediaItemConnectionEdge",
            "node": {
                "__typename": "MediaItem",
                "sourceUrl": workwize,
                "altText": "workwize"
            }
        },
        "fields": {
            "__typename": "Fields",
            "description": "A platform for Task Management",
            "link": "https://github.com/pacasiano/FullStack",
            "role": "Frontend Developer",
            "stack": "React.js, Tailwind CSS, Django, PostgreSQL"
        }
    }
]