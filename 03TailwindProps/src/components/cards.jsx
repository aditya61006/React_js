import React from 'react' 
 
function card({username = "Unknown" ,age= '-1'}){
    return(
        <figure class="md:flex bg-slate-100 rounded-xl mb-6  p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/19501487/pexels-photo-19501487/free-photo-of-elderly-man-with-a-white-beard-sitting-on-stairs.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500  dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {age}
      </div>
    </figcaption>
  </div>
</figure>

    )
}

export default  card