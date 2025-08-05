<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Array Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6fb;
            margin: 0;
            padding: 0;
            color: #222;
        }
        .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 12px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            grid-gap: 28px;
        }
        .card {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 2px 10px 0 rgba(48, 121, 237, 0.06);
            border-left: 8px solid #3079ed;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            transition: box-shadow 0.2s;
        }
        .card-header {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 24px 28px 18px 28px;
            position: relative;
            transition: background 0.2s;
        }
        .card-header:focus-visible {
            outline: 2px solid #3079ed;
        }
        .card-header .icon {
            font-size: 1.7em;
            margin-right: 16px;
            opacity: 0.70;
        }
        .card-header h3 {
            font-size: 1.13em;
            margin: 0;
            flex: 1 1 auto;
            font-weight: 600;
        }
        .chevron {
            font-size: 1.3em;
            transition: transform 0.3s;
            margin-left: 16px;
            opacity: 0.35;
        }
        .card.expanded .chevron {
            transform: rotate(90deg);
        }
        .card-body {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            background: #f8fafd;
            transition: max-height 0.38s cubic-bezier(0.86,0,0.07,1), opacity 0.3s;
            padding: 0 28px;
        }
        .card.expanded .card-body {
            padding: 0 28px 24px 28px;
            max-height: 500px;
            opacity: 1;
        }
        .result {
            background: #e8f0fe;
            padding: 12px 15px;
            border-radius: 8px;
            margin-bottom: 12px;
            font-size: 1.09em;
            margin-top: 14px;
            display: inline-block;
        }
        .desc {
            font-size: 0.98em;
            color: #357ae8;
            margin-bottom: 12px;
            margin-top: 18px;
            display: block;
        }
        pre {
            background: #23272e;
            color: #f8f8f2;
            padding: 9px 14px;
            border-radius: 6px;
            overflow-x: auto;
            font-size: 0.99em;
            margin: 0;
        }
        /* Different colored borders and icons */
        .card:nth-child(2) { border-color: #ff7043; }
        .card:nth-child(2) .icon { color: #ff7043; }
        .card:nth-child(3) { border-color: #43a047; }
        .card:nth-child(3) .icon { color: #43a047; }
        .card:nth-child(4) { border-color: #ab47bc; }
        .card:nth-child(4) .icon { color: #ab47bc; }
        .card:nth-child(5) { border-color: #fbc02d; }
        .card:nth-child(5) .icon { color: #fbc02d; }
        .card:nth-child(6) { border-color: #1976d2; }
        .card:nth-child(6) .icon { color: #1976d2; }
        .card:nth-child(7) { border-color: #fb8c00; }
        .card:nth-child(7) .icon { color: #fb8c00; }
        .card:nth-child(8) { border-color: #8e24aa; }
        .card:nth-child(8) .icon { color: #8e24aa; }
        .card:nth-child(9) { border-color: #00897b; }
        .card:nth-child(9) .icon { color: #00897b; }

        @media (max-width: 700px) {
            .container { grid-template-columns: 1fr; }
            .card-header, .card.expanded .card-body { padding-left: 18px; padding-right: 18px; }
        }
    </style>
</head>
<body>
<div class="container" id="expCardContainer">
    <?php
        $fruits = ["Apple", "Orange", "Mango", "Grapes"];
        // Clones for separate manipulations
        $fruits2 = $fruits;
        $fruits3 = $fruits;
        $fruits4 = $fruits;
        $fruits5 = $fruits;

        // For ksort and asort examples (associative array)
        $assoc = ["b" => "Orange", "a" => "Apple", "d" => "Grapes", "c" => "Mango"];
        $ksort_assoc = $assoc;
        ksort($ksort_assoc);
        $asort_assoc = $assoc;
        asort($asort_assoc);

        // Card 1: count()
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">🔢</span>';
        echo '<h3>Array count() function</h3>';
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Returns number of elements in the array.</span>';
        echo '<div class="result">'.count($fruits) . " items in the array.</div>";
        echo '</div>';
        echo '</div>';

        // Card 2: push
        array_push($fruits2, "Banana", "Pineapple");
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">➕</span>';
        echo "<h3>Array Push Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Adds elements to the end of the array.</span>';
        echo "<pre>";
        print_r($fruits2);
        echo "</pre>";
        echo '</div>';
        echo '</div>';

        // Card 3: pop
        array_pop($fruits3);
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">🗑️</span>';
        echo "<h3>Array Pop Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Removes the last element from the array.</span>';
        echo "<pre>";
        print_r($fruits3);
        echo "</pre>";
        echo '</div>';
        echo '</div>';

        // Card 4: shift
        array_shift($fruits4);
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">⬅️</span>';
        echo "<h3>Array Shift Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Removes the first element from the array.</span>';
        echo "<pre>";
        print_r($fruits4);
        echo "</pre>";
        echo '</div>';
        echo '</div>';

        // Card 5: unshift
        array_unshift($fruits5, "Strawberry", "Blueberry");
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">➡️</span>';
        echo "<h3>Array Unshift Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Adds elements to the beginning of the array.</span>';
        echo "<pre>";
        print_r($fruits5);
        echo "</pre>";
        echo '</div>';
        echo '</div>';

        // Card 6: in_array
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        if (in_array("Mango", $fruits5)) {
            echo '<span class="icon">✅</span>';
        } else {
            echo '<span class="icon">❌</span>';
        }
        echo "<h3>Array In-Array Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Checks if "Mango" exists in the array.</span>';
        if (in_array("Mango", $fruits5)) {
            echo "<p><b>Mango</b> is present in the array.</p>";
        } else {
            echo "<p><b>Mango</b> is not present in the array.</p>";
        }
        echo '</div>';
        echo '</div>';

        // Card 7: sort
        $numbers = [5, 3, 8, 1, 4];
        $numbers_sort = $numbers;
        sort($numbers_sort);
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">🔃</span>';
        echo "<h3>Array Sort Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Sorts a numeric array in ascending order.</span>';
        echo '<div class="result">Sorted array: ' . implode(", ", $numbers_sort) . '</div>';
        echo "<pre>";
        print_r($numbers_sort);
        echo "</pre>";
        echo '</div>';
        echo '</div>';

        // Card 8: ksort
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">🅺</span>';
        echo "<h3>Array KSort Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Sorts an associative array by keys.</span>';
        echo '<div class="result">';
        foreach($ksort_assoc as $k=>$v){
            echo "$k => $v  ";
        }
        echo '</div>';
        echo "<pre>";
        print_r($ksort_assoc);
        echo "</pre>";
        echo '</div>';
        echo '</div>';

        // Card 9: asort
        echo '<div class="card">';
        echo '<div class="card-header" tabindex="0">';
        echo '<span class="icon">🅰️</span>';
        echo "<h3>Array ASort Function</h3>";
        echo '<span class="chevron">▶</span>';
        echo '</div>';
        echo '<div class="card-body">';
        echo '<span class="desc">Sorts an associative array by values, keeping key association.</span>';
        echo '<div class="result">';
        foreach($asort_assoc as $k=>$v){
            echo "$k => $v  ";
        }
        echo '</div>';
        echo "<pre>";
        print_r($asort_assoc);
        echo "</pre>";
        echo '</div>';
        echo '</div>';
    ?>
</div>

<script>
document.querySelectorAll('.card-header').forEach(function(header){
    header.addEventListener('click',function(){
        const card = this.parentElement;
        card.classList.toggle('expanded');
    });
    header.addEventListener('keydown',function(e){
        if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const card = this.parentElement;
            card.classList.toggle('expanded');
        }
    });
});
</script>
</body>
</html>

