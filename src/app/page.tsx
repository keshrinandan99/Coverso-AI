import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/Cta'
const Page = () => {
  return (
    <main>
      <h1>Pouplar Companions</h1>
    <section className='home-section'>
    <CompanionCard
      id="123"
      name="Neura the Brainy Explorer"
      topic="Neural Network of the Brain"
      subject="Science"
      duration={45}
      color="#ffda6e"
    />
    <CompanionCard
      id="2"
      name="Countsy the Number wizard"
        topic="Derivatives & Integrals"
      subject="Maths"
      duration={30}
      color="#e5d0ff"
    />
    <CompanionCard
      id="3"
      name="Verba the Vocabulary Builder"
      topic='English Literature'
      subject="Language"
      duration={30}
      color="#BDE7FF"
    />
     
    </section>
    <section className='home-section'>
      <CompanionList/>
      <Cta/>
    </section>
    
    </main>
     
    
  )
}

export default Page