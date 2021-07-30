const pageVariants = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 1,
        x: '-100vw',
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

const pageTransitionFM = {
    initial: 'out',
    animate: 'in',
    exit: 'out',
    variants: pageVariants,
    transition: pageTransition,
};

export default pageTransitionFM;
