async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  // (toggle) student id/name, email, mentors by id (toggle)
  //  cards/info
  //

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  const cards = document.querySelector(".cards")
  const info = document.querySelector(".info")

  const learners = await axios.get("http://localhost:3003/api/learners")
  const mentors = await axios.get("http://localhost:3003/api/mentors")
  // let learnersData = learners.data
  // let mentorsData = mentors.data

  // let {data} = learners
  const learnersMentor = learners.data.map(learner =>{
    learner.mentors.data.forEach((mentorId, idx )=>{
      console.log(mentorId)
    })
  })
  
  
  
  // learnersData.forEach(learner => {
  //   mentorsData.forEach(mentor => {
  //     for (let i = 1; i < 18; i++) {
  //       if (learner.mentor[i] === mentors.id) {
  //         learner.mentor[i] = `${mentors.firstName} ${mentors.lastName}`

  //       }
  //     }

  //   })
  // })

 //console.log("learners", learnersData)
  //console.log("mentor", mentorsData)

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()


