import React, { useContext } from 'react';

import './style.css';
import { ModalContext } from '../../contexts';


export const Controls = () => {
    const { openModal, closeModal } = useContext(ModalContext);

    const handleClickFirstButton = () => {
      openModal({
        title: "Opened by First Button",
        children: (
          <div class="first-window">
            <p>
              <h1 class="modal-title-all">
                {" "}
                <span class="first-modal-title">
                  Gladiators Colosseum:
                </span>{" "}
                <span class="modal-one-title">The Roman Gladiators</span>
              </h1>

              <p class="first-modal-paragraphs">
                <b>
                  Do you remember the great movie by Ridley Scott with Russell
                  Crowe?
                </b>{" "}
                Colosseum Gladiators are iconic figures for the city of Ancient
                Rome. But who were the Roman gladiators and what is their fame?
                <p>
                  <b>Roman Gladiators: who were they?</b> The gladiator was a
                  fighter of Ancient Rome. The name derives from gladio, the
                  Latin word for the sword used during the fighting. The
                  Colosseum Gladiators were usually slaves or prisoners of war,
                  or people condemned for committing some crime.{" "}
                </p>
                <p>
                  The duels between gladiators were born in Etruria and were
                  later taken up by the Romans. Their origin is attributable to
                  the munera, or public works created for the sake of the Roman
                  people. The munera gladiatoria were public shows offered by
                  wealthy people on certain occasions. Among these were
                  gladiator games.
                </p>
              </p>
            </p>
            <button class="close-first-modal" onClick={closeModal}>
              CLOSE MODAL!
            </button>
          </div>
        ),
      });
    }

    const handleClickSecondButton = () => {
      openModal({
        title: "Opened by Second Button",
        children: (
          <div class="second-window">
            <p>
              <h1 class="second-modal-title">Gladiator games</h1>
              <p class="second-modal-paragraph">
                Starting from 105 BC the gladiator games in Rome became public.
                The gladiator game show increased during the Roman Empire and
                the Flavia dynasty erected the largest amphitheater in the
                world, the Flavian Amphitheater.
                <p>
                  Inside the Colosseum the most important gladiator game show
                  was held. Prohibited by Constantine I, the games continued
                  despite the prohibitions. Among the most requested fighters
                  there were convicts and prisoners of war, coming from Thrace
                  and Germany, for their strength and for having nothing to
                  lose. For them, in fact, winner in gladiator shows means
                  creating a career and a possible independence. There was
                  numerous public participation, with frequent clashes between
                  opposing factions.
                </p>
              </p>
            </p>
            <button class="close-second-modal" onClick={closeModal}>
              CLOSE MODAL!
            </button>
          </div>
        ),
      });
    }

    const handleClickThirdButton = () => {
      openModal({
        title: "Opened by Third Button",
        children: (
          <div class="third-window">
            <p>
              <h1 class="modal-three-title">
                <span class="movie-title">Gladiator</span>{" "}
                <span class="movie-year">(2000 film)</span>
              </h1>
              <h3>
                <span class="quote">
                  <i>“What we do in life echoes in eternity”</i>
                </span>
                <span class="movie-quote">
                  , declares Crowe’s Maximus in one of Gladiator’s many quotable
                  moments.
                </span>{" "}
              </h3>
              <p class="third-modal-paragraph">
                Set in Roman times, the story of a once-powerful general forced
                to become a common gladiator. The emperor's son is enraged when
                he is passed over as heir in favour of his father's favourite
                general. He kills his father and arranges the murder of the
                general's family, and the general is sold into slavery to be
                trained as a gladiator - but his subsequent popularity in the
                arena threatens the throne.
              </p>
              <h3 class="music-title">Soundtrack "Now We Are Free"</h3>
              <p class="third-modal-paragraph">
                Composed by <b>Hans Zimmer</b> and Australian vocalist{" "}
                <b>Lisa Gerrard</b>, the soundtrack to Gladiator (2000) veers
                effortlessly between epic battle music and meditative hymns,
                reflecting the distinct yet harmonious musical partnership of
                its two creators.
              </p>
              <p class="third-modal-paragraph">
                With Gladiator, Hans Zimmer cemented his reputation as
                Hollywood’s go-to composer for big budget, brooding
                blockbusters. Heavily inspired by the works of Gustav Holst and
                Richard Wagner, the musical score is often bombastic and
                unrelenting, featuring many of Zimmer’s trademark musical cues,
                which would later be repeated in films like Pirates of the
                Carribean and Inception.
              </p>
            </p>
            <button class="close-third-modal" onClick={closeModal}>
              CLOSE MODAL!
            </button>
          </div>
        ),
      });
    }

    return (
      <div className="controls">
        <button onClick={handleClickFirstButton}>Open first modal</button>
        <button onClick={handleClickSecondButton}>Open second modal</button>
        <button onClick={handleClickThirdButton}>Open third modal</button>
      </div>
    );
}