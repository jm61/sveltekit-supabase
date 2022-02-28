<script>
    import {supabase} from "../supabase.js";

    const logout = () => {
        console.log("logging out")
        supabase.auth.signOut();
    }
    const ls  = JSON.parse(localStorage.getItem('supabase.auth.token'))
    const {expiresAt} = ls
    const time = (new Date(expiresAt*1000))
    
</script>

<div class="my-4 flex justify-end">
    <div class="mr-auto text-gray-500 "><h3>Your session will expires at: <small>{new Date(time).toLocaleTimeString()}</small></h3></div>
    <button
        type="submit"
        class="shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        on:click={logout}
    >
        Log Out 
    </button>
</div>