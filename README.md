# LuxCars 🚗💨  

**LuxCars** é uma aplicação web full-stack inspirada no design da **Apple Store**, voltada para exibir **carros de luxo e supercarros** como Ferrari, Lamborghini, McLaren, Porsche, Bugatti e outros.

O sistema permite:
- Cadastro e login de usuários com autenticação JWT
- CRUD completo de carros (apenas usuários autenticados)
- Interface moderna e responsiva com tema escuro premium
- Backend em Node.js + Express + MongoDB
- Frontend em React + Redux + TypeScript + Sass

---

## 🧱 Tecnologias Utilizadas

### 🔹 Frontend
- React + TypeScript  
- Redux Toolkit  
- Axios  
- Sass (SCSS)  

### 🔹 Backend
- Node.js + Express  
- MongoDB + Mongoose  
- JWT (JSON Web Token)  

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seuusuario/luxcars.git

2️⃣ Instalar dependências
cd server
npm install

cd ../client
npm install

3️⃣ Configurar variáveis de ambiente

Crie o arquivo .env na pasta server:

MONGO_URI=seu_link_mongodb
JWT_SECRET=sua_chave_secreta
PORT=4000

4️⃣ Rodar o backend
cd server
npm run dev

5️⃣ Rodar o frontend
cd client
npm start
```
