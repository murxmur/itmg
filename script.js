* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: #1f2937;
  background: #f8fafc;
}

header {
  background: #0f172a;
  color: white;
  padding: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 24px;
  font-weight: bold;
}

.hero {
  padding: 120px 8%;
  text-align: center;
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  color: white;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 30px;
}

.btn {
  background: white;
  color: #0f172a;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.section {
  padding: 80px 8%;
  text-align: center;
}

.section h2 {
  font-size: 32px;
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  font-weight: bold;
}

.dark {
  background: #0f172a;
  color: white;
}

footer {
  background: #020617;
  color: white;
  text-align: center;
  padding: 24px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 15px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 30px;
  }
}
