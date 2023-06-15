import React from "react";

function Form() {

    return (
        <div>
            <form action="/" method="post">
                <h2>Enter your Details below</h2>
                <table>
                    <tr>
                        <td><input type="checkbox" id="metric" name="metric" />
                            <label for="metric">Metric</label></td>
                        <td><input type="checkbox" id="imperial" name="imperial" />
                            <label for="imperial">Imperial</label></td>
                    </tr>
                    <tr>
                        <td><label for="height">Height</label></td>
                        <td><label for="weight">Weight</label></td>
                    </tr>
                    <tr>
                        <td><input type="number" name="height" id="weight-input" /><p>cm</p></td>
                        <td><input type="number" name="weight" id="weight-input" /><p>kg</p></td>

                    </tr>

                </table>
            </form>
        </div>
    )
}

export default Form;