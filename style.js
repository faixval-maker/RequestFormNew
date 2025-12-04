body {
  margin: 0;
  font-family: system-ui, Arial;
  display: flex;
  justify-content: center;
  padding: 40px;

  /* ✨ New background to match your screenshot */
  background: radial-gradient(
      circle at center,
      rgba(255,255,255,0.8) 0%,
      rgba(255,255,255,0.6) 20%,
      rgba(255,255,255,0.4) 40%,
      rgba(233,246,255,0.5) 60%,
      rgba(209,228,255,0.6) 80%,
      rgba(185,213,255,0.7) 100%
    ),
    linear-gradient(
      to bottom right,
      #d9f4dc 0%,
      #f7f1d4 25%,
      #ffe6dc 50%,
      #d4e7ff 100%
    );
}

.card {
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

h1 {
  margin-top: 0;
}

label {
  display: block;
  margin-top: 16px;
  font-weight: 600;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 6px;
}

button {
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  border: none;
  background: #0b76ef;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

#msg {
  margin-top: 10px;
  font-size: 14px;
}
