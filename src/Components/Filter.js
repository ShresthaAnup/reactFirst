import React from 'react';

const Filter = () => {
    return (
        <div>Contents of Filter
            <form>
                <label>
                    Date:
                    <input type = "text" id="date" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Filter;