import { ref } from 'vue'


const getPostData = () => {
    const posts = ref([])
    const error = ref(null)

    const load_data = async () => {
        try {
            let response = await fetch("http://localhost:3000/posts")
            if (response.ok) {
                posts.value = await response.json()
            } else {
                throw new Error(response.statusText)
            }
        } catch (e) {
            error.value = e.message
            console.log(error.value)
        }
    }

    return { posts, error, load_data }
}

export default getPostData
