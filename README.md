# 🎯 Quiz App

React tabanlı interaktif quiz uygulaması.  
Kullanıcı zorluk seviyesi ve soru sayısını seçerek test çözebilir,  
doğru/yanlış cevaplarını görebilir ve quiz bitiminde toplam skorunu öğrenir.

---

## 🚀 Özellikler

- 🔹 Open Trivia API üzerinden dinamik soru çekme  
- 🔹 Doğru / yanlış cevap kontrolü  
- 🔹 Her soru sonrası otomatik ilerleme  
- 🔹 Quiz bitiminde sonuç ekranı (doğru–yanlış sayısı + skor)  
- 🔹 React Router ile sayfa yönlendirmeleri  
- 🔹 Responsive ve modern arayüz

---

## 🧠 Kullanılan Teknolojiler

| Katman | Teknoloji |
|--------|------------|
| Frontend | **React.js ( Create React App)** |
| Router | **React Router DOM** |
| Veri | **Open Trivia Database API** |
| HTTP | **Fetch API** |
| Tasarım | **CSS3 (Flex, Grid, hover efektleri)** |
| State | **React Hooks (useState, useEffect, useMemo)** |

---

## 📁 Dosya Yapısı (Özet)

```
src/
├── api/
│ └── api.js # Soru verilerini çeker
├── component/
│ └── questionCard/
│ └── QuestionCard.jsx
├── pages/
│ ├── Introduce.jsx # Ana giriş sayfası
│ └── quiz/Quiz.jsx # Quiz ana akışı
├── App.js
└── index.js


```

<img width="1620" height="927" alt="Ekran görüntüsü 2025-10-07 223154" src="https://github.com/user-attachments/assets/1794a2e9-7915-4c6f-bb98-9a4ef8c09ec2" />



<img width="1492" height="880" alt="Ekran görüntüsü 2025-10-07 223204" src="https://github.com/user-attachments/assets/a8f745d3-c352-4035-b8f8-3eeea65ff604" />


<img width="1281" height="481" alt="Ekran görüntüsü 2025-10-07 223222" src="https://github.com/user-attachments/assets/7ae94a3d-5d90-49f8-a63e-e58f1b97d451" />





---

## ⚙️ Kurulum ve Çalıştırma

```bash
# Projeyi klonla
git clone https://github.com/<kullanıcı-adın>/quiz-app.git
cd quiz-app

# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm start









