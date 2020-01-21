; http://editor.planning.domains/#edit_session=oy5HKqWaD3ECHzV
; https://github.com/pucrs-automated-planning/heuristic-planning
; https://ai.dmi.unibas.ch/forstudents.html
; https://dmi.unibas.ch/de/studium/computer-science-informatik/lehrangebot-hs19/lecture-planning-and-optimization/#top
(define (domain magic_world)
    (:requirements :strips :typing :negative-preconditions :equality)
    (:types
        character
        location
    )
    (:predicates
        (border ?place1 - location ?place2 - location)
        (at ?npc - character ?place - location)
    )
    (:action move
        :parameters (?character - character ?place1 - location ?place2 - location)
        :precondition (and (at ?character ?place1) (border ?place1 ?place2))
        :effect (and (not (at ?character ?place1)) (at ?character ?place2))
    )
)
