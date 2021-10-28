const container = document.getElementsByClassName("video-ads ytp-ad-module")[0];

const observer = new MutationObserver(() => {
   // Lấy element button
  
   const skipButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
   if (skipButton){
      // Nhấn vào button để skip quảng cáo
      skipButton.click();     
   }
   
});

observer.observe(container, {childList: true});