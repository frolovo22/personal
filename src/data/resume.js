const resume = {
    name: "Aleksei Frolov",
    title: "Senior Software Engineer (Golang)",
    location: "Moscow",
    phone: "+7 915 401 4466",
    email: "frolov.alexey.22@gmail.com",
    linkedin: "https://www.linkedin.com/in/aleksei-frolov-13703b170/",

    overview: `Backend engineer with over 10 years of professional experience 
  in designing and delivering high-performance, distributed, and scalable systems. 
  Specialized in Golang, databases, and event-driven architectures with deep knowledge 
  of PostgreSQL and ClickHouse. Adept at optimizing algorithms, building cloud-native 
  solutions with Kubernetes, and integrating complex systems for measurable business impact.`,

    summary:
        "Backend engineer with 10+ years of experience. Focused on Golang, algorithmic optimization, databases (Postgres/ClickHouse), data streaming (Kafka), and systems orchestration (Kubernetes). I build high-performance, scalable services and continuously improve architecture.",
    skills: [
        "Golang","PostgreSQL","ClickHouse","Docker","Kubernetes","Kafka","NATS","Prometheus","Grafana","Redis","MongoDB","DynamoDB","RabbitMQ","AWS","GCP","gRPC","HTTP","Microservices","Jaeger","Nginx","Linux","Helm"
    ],
    experience: [
        {
            role: "Senior Software Engineer (Golang)",
            company: "Evergen Inc.",
            location: "Sydney, Australia",
            period: "Mar 2024 — Present",
            bullets: [
                "Implemented control commands for solar PV to optimize generation and efficiency.",
                "Designed and delivered battery management control commands."
            ],
            stack: ["Go","Postgres","Kafka","AWS","Redis","gRPC","HTTP","Prometheus","Grafana","OpenTracing","Docker","Kubernetes"]
        },
        {
            role: "Senior Software Engineer (Golang)",
            company: "Exness Inc.",
            location: "Limassol, Cyprus",
            period: "Jul 2021 — Jul 2023",
            bullets: [
                "Rewrote a legacy SMS service in Go, added business & tech metrics, and stabilized provider issues.",
                "Integrated 10+ SMS providers and optimized routing — ~$1M/year savings with 99.99% delivery.",
                "Built a support admin panel — reduced response time from hours to ~2 minutes.",
                "Migrated messaging from NATS to Kafka with guaranteed delivery and zero loss.",
                "Reduced domain service latency from ~150ms to ~50ms.",
                "Introduced a unified logging format for easier search and correlation."
            ],
            stack: ["Go","Postgres","Kafka","NATS","ClickHouse","Redis","gRPC","HTTP","Prometheus","Grafana","OpenTracing","Marketing Cloud","AWS SES","Docker","Kubernetes","Helm"]
        },
        {
            role: "Golang Team Lead",
            company: "RT Labs",
            location: "Moscow, Russia",
            period: "Apr 2020 — Jul 2021",
            bullets: [
                "Launched an online educational library from scratch; led a backend team of 4.",
                "Designed architecture and selected technologies based on company constraints.",
                "Conducted code reviews, introduced Scrum (planning, retros, dailies, story points).",
                "Optimized DB queries: ~3s → ~50ms."
            ],
            stack: ["Go","Postgres","Mongo","DynamoDB","Kafka","HLS","ClickHouse","Redis","gRPC","HTTP","Prometheus","Grafana","OpenTracing","Docker","Docker Compose","Kubernetes","Helm"]
        },
        {
            role: "Senior Software Engineer",
            company: "dr. cash",
            location: "Hong Kong, China",
            period: "Mar 2019 — Apr 2020",
            bullets: [
                "Introduced Scrum and improved delivery processes.",
                "Raised automated test coverage to ~80%.",
                "Split a monolith into microservices, increasing system effectiveness."
            ],
            stack: ["Go","Postgres","Kafka","ClickHouse","Redis","gRPC","HTTP","Prometheus","Grafana","OpenTracing","Docker","Docker Compose","Kubernetes","GCP"]
        },
        {
            role: "Senior Software Engineer",
            company: "Echelon",
            location: "Moscow, Russia",
            period: "Jul 2017 — Mar 2019",
            bullets: [
                "Grew from middle to team lead; mentored 4 interns and built their learning plan.",
                "Built a warehouse monitoring MVP (Go) solo — architecture and stack."
            ],
            stack: ["Go","Postgres","Java","CouchDB","Redis","HTTP","Prometheus","Grafana","OpenTracing","Docker","Docker Compose","Kubernetes","GCP"]
        },
        {
            role: "Senior Software Engineer",
            company: "Innovative Center",
            location: "Moscow, Russia",
            period: "Dec 2012 — Jul 2017",
            bullets: [
                "Worked on a GIS suite similar to ArcGIS.",
                "Developed a unique method for DSM generation using radar interferometry.",
                "Designed algorithms for georeferencing and satellite data processing; GIS design."
            ],
            stack: ["Go","Postgres"]
        }
    ],
    education: [ { place: "Russian University of Transport (MIIT)", degree: "Master, Computer Science" } ],
    languages: ["English","Russian"],
}

export default resume
