(define (problem moving_hero)
  (:domain magic_world)
  (:objects
    hero - character
    schack swamp forest town - location
  )
  (:init
	(border schack swamp) (border swamp schack)
	(border schack forest) (border forest schack)
	(border forest town) (border town forest)
	(at hero schack)
  )
  (:goal (at hero town))
)
