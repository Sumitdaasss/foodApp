🍽️ FoodApp – AI-Powered Smart Food Ordering System


🚀 Overview
FoodApp is an AI-powered food ordering system built using Bolt.AI for front-end and AI logic integration, and Supabase as the backend for real-time database and authentication.

The app simplifies food ordering with the help of intelligent features like natural language ordering, smart recommendations, and real-time status tracking — offering a seamless user experience.

🧠 AI-Powered Features
Natural Language Food Ordering: Users can type or speak their orders in natural language (e.g., "I want a large pepperoni pizza with extra cheese") and the AI interprets it.

Smart Recommendations: Based on previous orders or dietary preferences, the app suggests meals tailored to the user.

Real-Time Chat Assistant: An AI chatbot (powered by Bolt.AI) guides the user through the ordering process.

Sentiment-Aware Feedback Handling: The app uses AI to analyze customer reviews and rate the restaurant/service quality.

🛠️ Tech Stack
⚡ Bolt.AI
Bolt.AI provides the front-end logic and AI conversational flows.

Enables drag-and-drop workflow creation for AI decision trees.

Integrates AI prompts, NLP engines, and external APIs seamlessly.

🗃️ Supabase
Open-source Firebase alternative for the backend.

Provides:

PostgreSQL database

Authentication (email, password, OAuth)

Realtime API for order updates

Edge functions for custom server-side logic

📱 Features
Feature	Description
🔍 Search & Order	Search dishes and place orders using AI
🧾 Dynamic Menu	Menu items fetched from Supabase database
💬 Chat-based UX	AI chat UI built with Bolt.AI workflows
📊 Order History	User-specific order tracking
🕒 Real-time Order Status	Updates using Supabase real-time API
🔐 Secure Auth	Login and sign-up powered by Supabase Auth

🧪 How AI Works in This App
User Interaction: Users type/speak their queries.

Bolt.AI Engine: Interprets queries using NLP.

Workflow Execution: Based on AI classification, Bolt triggers actions (e.g., fetch food items, place order).

Supabase Backend: Stores and retrieves relevant data securely.

Response Generation: Results are sent back to the user via AI chat.

🧰 Setup Instructions
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/foodApp.git
cd foodApp
2. Set up Supabase
Go to supabase.com

Create a new project

Copy your API URL and anon key

Set them in your environment/config file.

3. Configure Bolt.AI
Sign in to Bolt.AI

Import your workflow or create new workflows for:

Order handling

Recommendations

Feedback

4. Run Locally
bash
Copy
Edit
npm install
npm run dev
🌐 Live Demo
🔗 Try the FoodApp Live

📷 Screenshots
Include some UI screenshots of your app here

📌 Future Enhancements
Integrate payment gateways (Stripe, Razorpay)

Multi-language NLP support

Admin dashboard for restaurants

AI-based dynamic pricing

🤝 Contribution
PRs are welcome! Please fork the repo and submit a pull request.

📄 License
MIT License

🙌 Acknowledgements
Bolt.AI

Supabase

OpenAI for GPT-based NLP integration

