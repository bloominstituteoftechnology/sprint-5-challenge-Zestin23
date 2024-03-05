async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  // (toggle) student name/id, email, mentors by id (toggle)
  //  cards/info
  //

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  try {
    // eslint-disable-next-line no-undef
    const learnersResponse = await axios.get('http://localhost:3003/api/learners')
    // eslint-disable-next-line no-undef
    const mentorsResponse = await axios.get('http://localhost:3003/api/mentors');

    const learners = learnersResponse.data
    // console.log(learners)
    // console.log(learners[0].fullName)
    // console.log(learners[0].id)
    
    const mentors = mentorsResponse.data
    // console.log(mentors)
    // console.log(mentors[0].firstName, mentors[0].lastName)
    // console.log(mentors[0].id)
     
    learners.forEach(learner => {
      const learnerName = learner.fullName
      const learnerId = learner.id
      const email = learner.email      
      
      const cards = document.querySelector(".cards")
      const card = document.createElement("div")
      const nameP = document.createElement("h3")
      const emailP = document.createElement("div")  
      
      card.classList.add("card")
      
      cards.appendChild(card)
      card.appendChild(nameP)
      card.appendChild(emailP)      

      nameP.textContent = `${learnerName}`
      emailP.textContent = `${email}`

      learner.mentors = learner.mentors.map(mentorId => {       // <-------------- PRACTICE --------------
        // console.log(mentor)

        const newMentor = mentors.find(mentorObj => mentorObj.id === mentorId)      
        
        const mentorName = `${newMentor.firstName} ${newMentor.lastName}`
        // console.log(mentorName)

        return mentorName
      })

      const mentorP = document.createElement("h4")
      mentorP.classList.add("closed")
      const mentorUlist = document.createElement("ul")      
      
      card.appendChild(mentorP)      
      card.appendChild(mentorUlist)           
      
      mentorP.textContent = "Mentors"

      learner.mentors.forEach(mentor => {
        const mentorList = document.createElement("li")
        mentorUlist.appendChild(mentorList)
        mentorList.textContent = `${mentor}`
      }) 
            
      mentorP.addEventListener("click", evt => {       
        
        if (mentorP.classList.contains("open")){
          mentorP.classList.remove("open")
          mentorP.classList.add("closed")
        } else {
          mentorP.classList.add("open")
          mentorP.classList.remove("closed")
        }              
      })
      
      document.querySelector(".info").textContent = "No learner is selected"
      
      card.addEventListener("click", evt => {
        document.querySelectorAll(".card").forEach(card => {
          card.classList.remove("selected")         
        })
        card.classList.add("selected")
        document.querySelector(".info").textContent = `The selected learner is ${learnerName}`
        nameP.textContent = `${learnerName}, ID ${learnerId}`
      })      

      document.addEventListener("click", evt => {
        if (evt.target === document.querySelector(".card")) {
          const learners = document.querySelectorAll(".card")
          learners.forEach(card => card.classList.remove("selected"))
          nameP.textContent = `${learnerName}`
          document.querySelector(".info").textContent = "No learner is selected"          
        }
      })
    })

  } catch (error) {
    console.error('Error fetching data:', error)
  }  
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()