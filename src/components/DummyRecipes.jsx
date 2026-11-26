import React, { useEffect, useState } from 'react'
import '../assets/css/DummyRecipes.css'
import axios from 'axios';

const DummyRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;

        const fetchRecipes = async() => {
            setLoading(true)
            setError(null)

            try {
                const res = await axios.get('https://dummyjson.com/recipes')
                if(mounted) setRecipes(res.data.recipes.slice(0,5))
                console.log(res.data.recipes)
            } catch (error) {
                if(mounted) setError('데이터를 불러오지 못했습니다.')
            } finally {
                if(mounted) setLoading(false)
            }
        }

        fetchRecipes();

        return () => {
            mounted = false
        }
    }, [])

  return (
    <div className='recipes-wrap'>
        <h2>recipes</h2>
        <ul>
            {recipes.map((item) => {
                console.log(item);
                return (
                    <li key={item.id}>
                        <span>{item.id}</span>
                        <div className="img-wrap">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <h2>{item.name}</h2>
                        <ol>
                            {/* 요리 만드는 순서 나오게 하기 */}
                            {item.instructions.map((instruction) => (
                                <li key={instruction.id}>{instruction}</li>
                            ))}
                        </ol>
                        {/* tag */}
                        {item.tags.map((tag) => (
                            <span key={tag.id}>{tag}</span>
                        ))}
                    </li> 
                )
            })}           
        </ul>
    </div>
  )
}

export default DummyRecipes