import "./Dogcard.css";

export const Dogcard = () => {
  return (
    <div className="dog-card">
      <img
        className="dog-card__image"
        src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="dog-card__info">
        <p className="dog-card__name">Rainbow</p>

        <div className="dog-card__block">
          <div className="dog-card__rating">
            <img className="dog-card__icon" src="/bone.svg" alt="" />
            <p className="dog-card__value">4</p>
          </div>
          <p className="dog-card__label">Rating</p>
        </div>

        <div className="dog-card__block">
          <p className="dog-card__value">7</p>
          <p className="dog-card__label">Events created</p>
        </div>
      </div>
    </div>
  );
};
