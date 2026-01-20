const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy birthday naka อ้วนสุขสันต์วันเกิดนะ ขอให้ปีนี้อ้วนมีความสุขมากๆ 
ขอให้ทุกวันของอ้วนมีแต่รอยยิ้ม เสียงหัวเราะ  ขอให้อ้วนเจอแต่คนที่ดีเข้ามา 
ถึงแม้เราจะพึ่งรู้จักกันแต่เค้าก็อยากอยู่กับแก อยู่ถือเค้กให้แกไปในทุกปี 
ถึงแม้เค้าอาจจะไม่ได้มีของขวัญที่มีค่าให้อ้วน แต่เค้ารักอ้วนมากๆนะ 
ขอให้อ้วนสุขภาพร่างกายแข็งแรง มีกน้าที่การงานอย่างที่ใจตั้งไว้ 
ไม่ว่าจะเจอปัญหาไรก็ตามจะมีเค้าอยู่ข้างๆอ้วนเสมอ

รักนะรักมาก
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
