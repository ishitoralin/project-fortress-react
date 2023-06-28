## This is the final project frontend for mfee36 group4.

  

#### The backend for final project - https://github.com/LQTjim/g4-final-project-backend  
  
---
  
> ### 使用自己的客製 Layout
在你的 page 檔案中添加 getLayout 屬性
```
// 在這裡加入你的客製 Layout
YourPage.getLayout = page => (
    <YourLayout>
    {page}
    </YourLayout>
)

// 你的頁面元件
export default YourPage() { 
    return (
        <YourPageComponent />
    )
}
 ```
