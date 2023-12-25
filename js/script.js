// script.js

// 画像のパスの配列
var imagePaths = [
  "/Users/kosakasho/Desktop/portfolio2/cracked-glass-in-space-background-with-design-space.jpg",
  "/Users/kosakasho/Desktop/portfolio2/3d-technology-digital-wave-particle-background.jpg",
  "/Users/kosakasho/Desktop/portfolio2/abstract_diagonal_blue_shinny_shape_background.jpg"
];

// 現在の画像のインデックス
var currentIndex = 0;

// Anime.jsのアニメーションを設定
var imageAnimation = anime({
  targets: 'body',
  opacity: [1, 0], // 画像が切り替わる際にフェードアウト
  easing: 'linear',
  duration: 9000, // 9秒かけてフェードアウト
  autoplay: false, // マニュアルで実行
  complete: function(anim) {
    // アニメーションが完了したときに呼ばれるコールバック
    document.body.style.backgroundImage = "url('" + imagePaths[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % imagePaths.length;
    // 次の画像を設定し、フェードインアニメーションを開始
    imageAnimation.play();
  }
});

// ページが読み込まれたらアニメーションを開始
document.addEventListener("DOMContentLoaded", function() {
  // 最初の画像を設定
  document.body.style.backgroundImage = "url('" + imagePaths[currentIndex] + "')";
  // 最初のフェードインアニメーションを開始
  imageAnimation.play();
});

// 20秒ごとにアニメーションを繰り返す
setInterval(function() {
  imageAnimation.restart();
}, 20000); // 20秒ごとにアニメーションを再開
