const container = document.getElementsByClassName("video-ads ytp-ad-module")[0];

const observer = new MutationObserver(() => {
  
  
   const skipButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
   if (skipButton){

      skipButton.click();     
   }
   
});

observer.observe(container, {childList: true});
