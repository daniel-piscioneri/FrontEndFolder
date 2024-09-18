function Article() {
    return (
        <div style={{ margin: '5rem' }}><h4 style={{backgroundColor:'grey'}}>What do you want to ask or share?</h4>
    <p>This section is designed based on the type of the post. It coule be developed by conditional rendering. <span style={{ color: 'red' }}>For post an article, the following section could be appeard.</span> </p>
    <h5>Title</h5>
    <input type='text' placeholder='Enter a descriptive title'></input>
    <h5>Article</h5>
    <textarea style={{resize:'none', height:'60px'}} placeholder='Enter a 1-paragraph abstract'></textarea>
    <h5>Article Text</h5>
    <textarea style={{resize:'none'}} placeholder='Enter a 1-paragraph abstract'></textarea>
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop:'2rem' }}>
      <h5>Tags</h5>
      <input type='text' placeholder='Please add up to 3 tags to desribe what your article is about e.g., Java'></input>
    </div>
    <button style={{ float: 'right', marginTop: '2rem', backgroundColor: 'lightgray', borderColor: 'lightgray', width: '100px' }}>Post</button>
  </div>
    );
}

export default Article;