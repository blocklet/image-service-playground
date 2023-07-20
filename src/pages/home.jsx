/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SIZES = [100, 200, 300, 400];
const QUALITY = [20, 40, 60, 80, 100];
const SHARPEN = [50, 100, 200, 500, 1000];
const ROTATE = [90, 180, 270];

function Home() {
  const [params] = useSearchParams();
  const image = params.get('image');

  return (
    <div>
      <h3>Resize + Quality</h3>
      <div className="images">
        {QUALITY.map((x) => (
          <div key={`quality-${x}`} className="image">
            <p>
              <a href={`${image}/resize?w=300&q=${x}`} target="_blank">
                width=300, quality={x}
              </a>
            </p>
            <img src={`${image}/resize?w=300&q=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize + Sharpen</h3>
      <div className="images">
        {SHARPEN.map((x) => (
          <div key={`sharpen-${x}`} className="image">
            <p>
              <a href={`${image}/resize?w=300&s=${x}`} target="_blank">
                width=300, sharpen={x}
              </a>
            </p>
            <img src={`${image}/resize?w=300&s=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize Width</h3>
      <div className="images">
        {SIZES.map((x) => (
          <div key={`resize-w-${x}`} className="image">
            <p>
              <a href={`${image}/resize?w=${x}`} target="_blank">
                width={x}
              </a>
            </p>
            <img src={`${image}/resize?w=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize Height</h3>
      <div className="images">
        {SIZES.map((x) => (
          <div key={`resize-h-${x}`} className="image">
            <p>
              <a href={`${image}/resize?h=${x}`} target="_blank">
                height={x}
              </a>
            </p>
            <img src={`${image}/resize?h=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize Both</h3>
      <div className="images">
        {SIZES.map((x) =>
          SIZES.map((y) => (
            <div key={`resize-b-${x}-${y}`} className="image">
              <p>
                <a href={`${image}/resize?w=${x}&h=${y}`} target="_blank">
                  width={x}, height={y}
                </a>
              </p>
              <img src={`${image}/resize?w=${x}&h=${y}`} alt="" />
            </div>
          ))
        )}
      </div>
      <h3>Resize + Rotate</h3>
      <div className="images">
        {ROTATE.map((x) => (
          <div key={`resize-r-${x}`} className="image">
            <p>
              <a href={`${image}/resize?w=200&r=${x}`} target="_blank">
                width=200, rotate={x}
              </a>
            </p>
            <img src={`${image}/resize?w=200&r=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Crop Width</h3>
      <div className="images">
        {SIZES.map((x) => (
          <div key={`crop-w-${x}`} className="image">
            <p>
              <a href={`${image}/crop?w=${x}`} target="_blank">
                width={x}
              </a>
            </p>
            <img src={`${image}/crop?w=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Crop Height</h3>
      <div className="images">
        {QUALITY.map((x) => (
          <div key={`crop-h-${x}`} className="image">
            <p>
              <a href={`${image}/crop?h=${x}`} target="_blank">
                height={x}
              </a>
            </p>
            <img src={`${image}/crop?h=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Crop Both</h3>
      <div className="images">
        {SIZES.map((x) =>
          SIZES.map((y) => (
            <div key={`crop-b-${x}-${y}`} className="image">
              <p>
                <a href={`${image}/crop?w=${x}&h=${y}`} target="_blank">
                  width={x}, height={y}
                </a>
              </p>
              <img src={`${image}/crop?w=${x}&h=${y}`} alt="" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
